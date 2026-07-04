"use client";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const words = [
  "We",
  "help",
  "ambitious",
  "brands",
  "and",
  "startups",
  "build",
  "digital",
  "products",
  "that",
  "stand",
  "out",
  "and",
  "scale.",
  "We",
  "believe",
  "in",
  "working",
  "smart,",
  "building",
  "fast,",
  "and",
  "designing",
  "with",
  "purpose.",
];

const fixedWhiteCount = 16;

const stats = [
  { label: "Projects Launched", value: 20, suffix: "+" },
  { label: "Years Of Experience", value: 1, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
];

function AboutBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.6 }}
      className="mb-15 inline-flex items-center gap-2 rounded-full border border-[#1f2f57] bg-[#0b1224] px-5 py-2 text-xl text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)]"
    >
      <span className="opacity-80 text-[#8fb4ff]">⌘</span>
      <span className=" text-[#8fb4ff]">About Us</span>
    </motion.div>
  );
}

function BackgroundWord() {
  const bgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["start 0.95", "end 0.25"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.07, 0.24]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [8, 4]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <div
      ref={bgRef}
      className="pointer-events-none absolute left-1/2 top-[40%] -z-10 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.h2
        style={{ scale, opacity, filter }}
        className="select-none whitespace-nowrap font-serif text-[150px] font-semibold italic leading-none tracking-[-0.07em] text-[#8fb4ff] md:text-[220px] lg:text-[300px]"
      >
        AUREVIAN
      </motion.h2>
    </div>
  );
}

function RevealWord({ children, progress, range, alwaysWhite = false }) {
  const color = useTransform(
    progress,
    range,
    alwaysWhite
      ? ["rgb(244,248,255)", "rgb(244,248,255)"]
      : ["rgb(127,146,182)", "rgb(244,248,255)"],
  );

  return (
    <span className="relative mr-2 mt-1 inline-block">
      {!alwaysWhite && (
        <span className="absolute left-0 top-0 text-[#7f92b6]">{children}</span>
      )}
      <motion.span style={{ color }} className="relative">
        {children}
      </motion.span>
    </span>
  );
}

function RevealParagraph() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const animatedCount = words.length - fixedWhiteCount;

  return (
    <div ref={containerRef} className="relative mx-auto max-w-150">
      <p className="flex flex-wrap justify-center text-center text-[22px] font-medium leading-[1.45] tracking-[-0.02em] md:text-[24px] md:leading-[1.35] lg:text-[28px]">
        {words.map((word, i) => {
          const alwaysWhite = i < fixedWhiteCount;
          const animatedIndex = i - fixedWhiteCount;
          const start = animatedIndex / animatedCount;
          const end = (animatedIndex + 1) / animatedCount;

          return (
            <RevealWord
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[Math.max(0, start), Math.max(0.001, end)]}
              alwaysWhite={alwaysWhite}
            >
              {word}
            </RevealWord>
          );
        })}
      </p>
    </div>
  );
}

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let hasAnimated = false;
    let controls;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          controls = animate(0, to, {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            onUpdate(latest) {
              setDisplay(Math.floor(latest));
            },
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      controls?.stop();
    };
  }, [to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ label, value, suffix, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="text-center"
    >
      <div className="mb-4 border-b border-[#1b2848] pb-4">
        <p className="text-sm text-[#8ea4c9] md:text-[15px]">{label}</p>
      </div>

      <h3 className="bg-linear-to-b from-[#f4f8ff] to-[#7fa7ff] bg-clip-text text-[52px] font-medium leading-none tracking-[-0.06em] text-transparent md:text-[72px] lg:text-[96px]">
        <CountUp to={value} suffix={suffix} />
      </h3>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-4 md:py-20 text-white md:px-8 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,180,255,0.16)_1px,transparent_1px)] [bg-size-22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-360">
        <div className="relative mx-auto flex max-w-245 flex-col items-center text-center">
          <AboutBadge />
          <BackgroundWord />
          <RevealParagraph />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}