"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import projects from "../lib/projects-data";
import StackingCards, { StackingCardItem } from "./fancy/blocks/stacking-cards";

function OrbitTag({ children }) {
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative overflow-hidden rounded-full p-px"
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-80%] rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.02),rgba(143,180,255,0.95),rgba(59,130,246,0.06),rgba(196,221,255,0.95),rgba(59,130,246,0.02))]"
      />
      <span className="relative z-10 block rounded-full border border-[#24375f] bg-[#0a1222] px-2.5 py-1 text-xs text-[#edf4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-3 sm:py-1.5 md:px-4 md:py-2 md:text-sm">
        {children}
      </span>
    </motion.button>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050816] px-4 py-10 md:py-16 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <div className="relative mx-auto max-w-400">
        <StackingCards className="space-y-5">
          {projects.map((project, index) => (
            <StackingCardItem
              key={index}
              topPosition="0px"
              className="sticky top-(--top-mobile) md:top-(--top-desktop) rounded-[22px] md:rounded-[32px] border border-[#182746] bg-[#070d1d] p-2 sm:p-2.5 shadow-[0_0_0_1px_rgba(120,160,255,0.03)]"
              style={{
                "--top-mobile": `${68 + index * 14}px`,
                "--top-desktop": `${100 + index * 28}px`,
              }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="grid gap-2.5 sm:gap-3 md:grid-cols-[1.1fr_0.95fr] lg:grid-cols-[1.1fr_0.95fr_0.95fr]"
                data-cursor="View Now"
              >
                {/* Image 1: Mobile order-1 (Top), Desktop md:order-2 */}
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="order-1 md:order-2 group relative aspect-video sm:aspect-16/10 md:aspect-4/3 overflow-hidden rounded-[18px] md:rounded-[26px] border border-[#1b2b4d]"
                >
                  <Image
                    src={project.image1}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,29,0.05)_0%,rgba(7,13,29,0.28)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[#7ca8ff]/6 mix-blend-soft-light" />

                  <motion.span
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="pointer-events-none absolute bottom-3 left-3 z-10 inline-flex items-center rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-3.5 py-1.5 text-xs font-medium text-[#08111f] shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-5 sm:py-2 sm:text-sm lg:hidden"
                  >
                    View Now
                  </motion.span>
                </motion.div>

                {/* Data: Mobile order-2 (Bottom), Desktop md:order-1 */}
                <div className="order-2 md:order-1 relative overflow-hidden rounded-[18px] md:rounded-[26px] border border-[#1b2b4d] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-3.5 sm:p-4 md:p-4">
                  {/* top premium line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.55),transparent)]" />

                  <motion.div
                    animate={{
                      x: [0, 30, -20, 0],
                      y: [0, -20, 20, 0],
                      scale: [1, 1.06, 0.98, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#6c96ff]/20 blur-[90px]"
                  />

                  <motion.div
                    animate={{
                      x: [0, -20, 20, 0],
                      y: [0, 20, -15, 0],
                      scale: [1, 0.95, 1.05, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -bottom-24 -right-15 h-72 w-72 rounded-full bg-[#8fb4ff]/12 blur-[100px]"
                  />

                  <motion.div
                    animate={{ x: ["-120%", "140%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1.5,
                    }}
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(143,180,255,0.09)_50%,transparent_80%)]"
                  />

                  <div className="relative z-10">
                    <div className="mb-3 sm:mb-4 md:mb-6 flex items-center gap-2.5 sm:gap-3">
                      <span className="rounded-full border border-[#304977] bg-[linear-gradient(180deg,#101b32_0%,#0c162a_100%)] px-3 py-0.5 text-xs text-[#c2d8ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-4 sm:py-1 sm:text-sm">
                        {project.year}
                      </span>

                      <h3 className="text-lg font-medium text-[#f5f9ff] sm:text-2xl md:text-3xl">
                        {project.title}
                      </h3>

                      {project.isClient && (
                        <span className="ml-auto rounded-full border border-[#4B7273] bg-[#041420] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#7de2a6] shadow-[inset_0_1px_0_rgba(207,214,214,0.08)] sm:px-3 sm:py-1 sm:text-[11px]">
                          Client
                        </span>
                      )}
                    </div>

                    <div className="mb-3 sm:mb-4 md:mb-6 h-px bg-linear-to-r from-transparent via-[#314a78] to-transparent" />

                    <div className="space-y-1.5 sm:space-y-2">
                      {project.points.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -2, scale: 1.01 }}
                          transition={{ duration: 0.25 }}
                          className=""
                        >
                          <motion.div
                            initial={{ x: "-120%", opacity: 0 }}
                            whileHover={{ x: "130%", opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(143,180,255,0.10)_45%,transparent_100%)]"
                          />

                          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                            <motion.span
                              whileHover={{ scale: 1.08, rotate: 6 }}
                              transition={{ duration: 0.25 }}
                              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_6px_20px_rgba(143,180,255,0.22)] sm:h-7 sm:w-7 md:h-8 md:w-8"
                            >
                              <Check size={12} className="sm:hidden" />
                              <Check size={14} className="hidden sm:block" />
                            </motion.span>

                            <p className="text-[13px] text-[#a9bbd9] sm:text-base md:text-lg">
                              {item}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-3 sm:mt-5 md:mt-7 flex flex-wrap gap-2 sm:gap-3">
                      {project.tags.map((tag, i) => (
                        <OrbitTag key={i}>{tag}</OrbitTag>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image 2: Desktop only */}
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative hidden aspect-4/3 overflow-hidden rounded-[26px] border border-[#1b2b4d] lg:block lg:order-3"
                >
                  <Image
                    src={project.image2}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,29,0.05)_0%,rgba(7,13,29,0.28)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[#7ca8ff]/6 mix-blend-soft-light" />
                </motion.div>
              </Link>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
}