import AOS from "aos";
import "aos/dist/aos.css";
import {
  Blocks,
  BrainCircuit,
  Code2,
  DatabaseBackup,
  Lightbulb,
  Pencil,
  Rocket,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";
const steps = [
  {
    id: "/01",
    title: "Discover",
    description:
      "Create visual identities that align with your voice and make lasting impressions.",
    icon: Lightbulb,
    customStyle: { top: "50px", left: "70px" },
  },
  {
    id: "/02",
    title: "Design",
    description:
      "Shape powerful experiences with purpose-driven creativity and thoughtful execution.",
    icon: Pencil,
    customStyle: { top: "350px", right: "70px" },
  },
  {
    id: "/03",
    title: "Develop",
    description:
      "Build scalable solutions that bring your vision to life with precision and performance.",
    icon: Code2,
    customStyle: { top: "650px", left: "70px" },
  },
  {
    id: "/04",
    title: "Testing",
    description:
      "Rigorous quality assurance to ensure seamless functionality and performance.",
    icon: Blocks,
    customStyle: { top: "930px", right: "70px" },
  },
  {
    id: "/05",
    title: "Database",
    description: "Structured data management and scalable architecture setup.",
    icon: DatabaseBackup,
    customStyle: { top: "1250px", left: "70px" },
  },
  {
    id: "/06",
    title: "AI Integration",
    description: "Intelligent features and predictive analysis implementation.",
    icon: BrainCircuit,
    customStyle: { top: "1540px", right: "70px" },
  },
  {
    id: "/07",
    title: "Launch & Grow",
    description:
      "Introduce your brand with impact through strategic rollouts that captivate and convert.",
    icon: Rocket,
    customStyle: { top: "1840px", left: "70px" },
  },
];

const PATH_D = `
  M 360 150 
  H 800
  Q 880 150 880 190
  V 310
  Q 880 390 800 390
  H 280
  Q 200 390 200 435
  V 550
  Q 200 630 280 630
  H 800
  Q 880 630 880 670
  V 790
  Q 880 870 800 870
  H 280
  Q 200 870 200 910
  V 1030
  Q 200 1110 280 1110
  H 800
  Q 880 1110 880 1150
  V 1270
  Q 880 1350 800 1350
  H 280
  Q 200 1350 200 1390
  V 1510
  Q 200 1590 280 1590
`;

export default function Process() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const lastProgress = useRef(0);

  const rocketX = useMotionValue(360);
  const rocketY = useMotionValue(150);
  const rocketRotate = useMotionValue(90);

  useEffect(() => {
    AOS.init({
      duration: 1400,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });

    AOS.refresh();
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });


  const springProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 35,
    mass: 1.2,
  });
  useMotionValueEvent(springProgress, "change", (latest) => {
    if (!pathRef.current) return;

    const totalLength = pathRef.current.getTotalLength();
    const clamped = Math.max(0, Math.min(1, latest));
    const currentLength = clamped * totalLength;

    const point = pathRef.current.getPointAtLength(currentLength);

    const before = pathRef.current.getPointAtLength(
      Math.max(0, currentLength - 5),
    );
    const after = pathRef.current.getPointAtLength(
      Math.min(totalLength, currentLength + 5),
    );

    let dx = after.x - before.x;
    let dy = after.y - before.y;

    const isScrollingUp = latest < lastProgress.current;

    if (isScrollingUp) {
      dx = -dx;
      dy = -dy;
    }

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    rocketX.set(point.x);
    rocketY.set(point.y);

    // rocket.svg jodi up-facing hoy, angle + 90 perfect
    rocketRotate.set(angle + 90);

    lastProgress.current = latest;
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] px-6 py-20 text-white md:px-10 lg:px-12"
    >
      <div className="relative mx-auto container">
        <div className="mb-24 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#22345b] bg-[#0b1224] px-4 py-2 text-xl text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)] backdrop-blur-sm">
              <span className="mr-2 text-[#8fb4ff]">≈</span>
              <span className="text-[#8fb4ff]">Our Process</span>
            </div>

            <h2 className="leading-tight tracking-tight">
              <span
                className="block text-4xl font-normal italic text-[#f4f8ff] md:text-5xl lg:text-6xl"
                style={{ fontFamily: "serif" }}
              >
                The Journey to a
              </span>
              <span className="block text-4xl font-bold text-[#f4f8ff] md:text-5xl lg:text-6xl">
                Successful Product
              </span>
            </h2>
          </div>

          <p className="max-w-[320px] pt-4 text-left text-sm leading-relaxed text-[#9fb0d1] md:pt-8 md:text-right">
            We keep things lean and collaborative — so ideas go from concept to
            launch without the chaos.
          </p>
        </div>

        <div className="relative mx-auto hidden h-525 w-full max-w-6xl md:block">
          <svg
            className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full"
            viewBox="0 0 1120 1700"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="zigzagGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6C96FF" />
                <stop offset="50%" stopColor="#D5E4FF" />
                <stop offset="100%" stopColor="#6C96FF" />
              </linearGradient>
            </defs>

            <path
              d={PATH_D}
              stroke="#8FB4FF"
              strokeOpacity="0.15"
              strokeWidth="10"
              strokeLinecap="round"
              className="blur-md"
            />

            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="transparent"
              strokeWidth="1"
            />

            <path
              d={PATH_D}
              fill="none"
              stroke="url(#zigzagGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 10"
              opacity="0.95"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="160"
                to="0"
                dur="7s"
                repeatCount="indefinite"
              />
            </path>

            <motion.g
              style={{
                x: rocketX,
                y: rocketY,
                rotate: rocketRotate,
                transformOrigin: "center",
              }}
            >
              <image
                href="/rocket3.svg"
                x="-45"
                y="-45"
                width="90"
                height="90"
                preserveAspectRatio="xMidYMid meet"
              />
            </motion.g>
          </svg>

          <div className="relative z-10 h-full w-full">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="absolute"
                  style={step.customStyle}
                  data-aos={
                    step.customStyle.left ? "fade-up-right" : "fade-up-left"
                  }
                 
                >
                  <div className="group relative w-95 h-62.5 overflow-hidden rounded-[30px] border border-[#1b2848] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_30px_rgba(108,150,255,0.08)] transition-all duration-500 hover:border-[#314a78] hover:shadow-[0_0_60px_rgba(108,150,255,0.15)]">
                    <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[36px] bg-[#8fb4ff]/8 blur-2xl opacity-60 transition-all duration-500 group-hover:bg-[#8fb4ff]/12 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#8fb4ff]/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.55),transparent)]" />

                    <div className="relative z-10">
                      <p className="text-[14px] font-medium tracking-wide text-[#8fb4ff]">
                        {step.id}
                      </p>
                      <h3 className="mt-4 text-[38px] font-semibold leading-none text-[#f4f8ff]">
                        {step.title}
                      </h3>
                      <p className="mt-4 mb-3 text-[18px] leading-[1.6] text-[#9fb0d1]">
                        {step.description}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute -bottom-37.5 left-1/2 h-80 w-[320px] -translate-x-1/2 rounded-full border border-[#24375f] bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.10),rgba(143,180,255,0.08),transparent_70%)]" />
                    <div className="pointer-events-none absolute -bottom-7.5 left-1/2 h-37.5 w-30 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.20),rgba(143,180,255,0.10),transparent_75%)] blur-2xl" />

                    <div className="absolute -bottom-2 left-1/2 z-1 -translate-x-1/2">
                      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.22)] transition-transform duration-500 group-hover:scale-110">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative space-y-8 md:hidden">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                data-aos="fade-up"
                className="group relative overflow-hidden rounded-[26px] border border-[#1b2848] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#8fb4ff]/8 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.45),transparent)]" />

                <div className="relative z-10 max-w-[85%]">
                  <p className="text-[13px] font-medium tracking-wide text-[#8fb4ff]">
                    {step.id}
                  </p>
                  <h3 className="mt-5 text-[38px] font-semibold leading-none text-[#f4f8ff]">
                    {step.title}
                  </h3>
                  <p className="mt-6 mb-2 text-[16px] leading-[1.65] text-[#9fb0d1]">
                    {step.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-30 left-1/2 h-62.5 w-62.5 -translate-x-1/2 rounded-full border border-[#24375f] bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.10),rgba(143,180,255,0.08),transparent_70%)]" />

                <div className="absolute -bottom-3 left-1/2 z-20 -translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.20)]">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
