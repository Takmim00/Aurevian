"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

import { useEffect } from "react";

export default function Details({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 pb-20 pt-28 text-white md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(143,180,255,0.12),transparent_38%)]" />
        <div className="absolute left-[8%] top-24 h-80 w-80 rounded-full bg-[#8fb4ff]/10 blur-[140px]" />
        <div className="absolute right-[8%] top-[34%] h-96 w-96 rounded-full bg-[#6c96ff]/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-400">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10 grid gap-8 md:mb-16 md:grid-cols-[1.3fr_0.7fr] md:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#c9dbff] backdrop-blur-md">
              <Sparkles size={15} />
              {project.badge}
            </div>

            <h1 className="max-w-300 text-[52px] font-light leading-[0.88] tracking-[-0.07em] text-[#f4f8ff] sm:text-[72px] md:text-[96px] lg:text-[124px] xl:text-[148px]">
              {project.title}
            </h1>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-95 text-[18px] leading-[1.25] text-[#dbe7ff] sm:text-[20px]">
              {project.tagline}
            </p>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-5 py-2.5 text-sm font-medium text-[#08111f] shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:scale-105"
              >
                Visit Live Site <ArrowUpRight size={16} />
              </a>
            )}

            <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] backdrop-blur-md">
              {[
                { label: "Year", value: project.typeYear },
                { label: "Project", value: project.typeProject },
                { label: "Service", value: project.typeService },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-r border-white/10 px-4 py-4 text-center last:border-r-0"
                >
                  <p className="text-sm text-[#8394b6]">{item.label}</p>
                  <h4 className="mt-1 text-sm font-medium text-white md:text-base">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <ShowcaseCard
          image={project.image1}
          label="Main Experience"
        />

        <ContentBlock
          title={project.overviewTitle}
          eyebrow={project.overviewEyebrow}
          paragraphs={project.overviewParagraphs}
        />

        <ProjectDNA items={project.dna} />

        <section className="grid gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:py-16">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#8fb4ff]">
              02 / Identity
            </p>
            <h2 className="text-[34px] font-medium leading-[1] tracking-[-0.04em] text-[#f4f8ff] md:text-[52px]">
              {project.identityTitle}
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-[1.85] text-[#9fb0d1] md:text-[16px]">
              {project.identityParagraphs}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {project.identityFeatures.map((item) => (
                <div
                  key={item}
                  className="group rounded-[22px] border border-[#1b2848] bg-[#071021] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#8fb4ff]/40 hover:bg-[#0b1428]"
                >
                  <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#dbe7ff] text-[#08111f]">
                    <Check size={15} />
                  </span>
                  <p className="text-[15px] text-[#dbe7ff]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ShowcaseCard
          image={project.showcase2}
          label={project.showcase2Label}
          withButton
          liveLink={project.liveLink}
        />

        <ContentBlock
          title={project.contentBlock3Title}
          eyebrow={project.contentBlock3Eyebrow}
          paragraphs={project.contentBlock3Paragraphs}
        />
      </div>
    </section>
  );
}

function ShowcaseCard({ image, withButton = false, label, liveLink }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-10 md:mb-16"
    >
      <div className="relative overflow-hidden rounded-[34px] border border-[#1b2848] bg-[#070d1d] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_30px_120px_rgba(0,0,0,0.38)] md:rounded-[46px] md:p-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.65),transparent)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#03060d_0px,#03060d_20px,#131c2d_24px,#d8e6ff_28px,#131c2d_32px,#03060d_42px)] opacity-[0.26]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_26%,rgba(5,8,22,0.45)_75%,rgba(5,8,22,0.75)_100%)]" />

        <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-[#dbe7ff] backdrop-blur-md">
          {label}
        </div>

        <div className="relative flex min-h-95 items-center justify-center py-14 sm:min-h-115 md:min-h-160">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-58 sm:w-76 md:w-110"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[34px] bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.22),rgba(143,180,255,0.09),transparent_70%)] blur-3xl" />

            <div className="relative rotate-[-2deg] rounded-[24px] border border-[#4f658f] bg-[#0b1224] p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_26px_80px_rgba(0,0,0,0.48)] md:rounded-[28px]">
              <div className="relative overflow-hidden rounded-[18px] border border-[#22345b] bg-[#0b1224] md:rounded-[22px]">
                <Image
                  src={image}
                  alt="Project showcase"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_18%,rgba(5,8,22,0.35)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-[30%] h-px bg-white/10" />
              </div>
            </div>

            {withButton && liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -right-10 top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border border-[#263c6d] bg-[radial-gradient(circle_at_30%_30%,#27334c_0%,#0a0f19_68%,#050816_100%)] text-[#f4f8ff] shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:scale-105 md:-right-20 md:h-36 md:w-36"
              >
                <span className="flex items-center gap-1 text-[18px] md:text-[28px]">
                  View <ArrowUpRight size={22} />
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ContentBlock({ title, paragraphs, eyebrow }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:py-16"
    >
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#8fb4ff]">
          {eyebrow}
        </p>
        <h2 className="text-[34px] font-medium leading-[1] tracking-[-0.04em] text-[#f4f8ff] md:text-[52px]">
          {title}
        </h2>
      </div>

      <div className="space-y-6">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-[15px] leading-[1.85] text-[#9fb0d1] md:text-[16px]"
          >
            {text}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

function ProjectDNA({ items }) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#1b2848] bg-[#071021] p-2">
      <div className="grid gap-2 md:grid-cols-4">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="rounded-[24px] border border-white/[0.06] bg-white/[0.035] p-5"
          >
            <p className="text-sm text-[#7f90b1]">{label}</p>
            <h4 className="mt-2 text-xl font-medium text-[#f4f8ff]">
              {value}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
