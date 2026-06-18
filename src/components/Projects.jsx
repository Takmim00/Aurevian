"use client";
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
      <span className="relative z-10 block rounded-full border border-[#24375f] bg-[#0a1222] px-4 py-2 text-sm text-[#edf4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {children}
      </span>
    </motion.button>
  );
}

export default function Projects() {
  return (
    <section className="bg-[#050816] px-4 py-16 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <div className="mx-auto max-w-400">
        <StackingCards className="space-y-5">
          {projects.map((project, index) => (
            <StackingCardItem
              key={index}
              className="sticky rounded-[32px] border border-[#182746] bg-[#070d1d] p-2.5 shadow-[0_0_0_1px_rgba(120,160,255,0.03)]"
              style={{ top: `${100 + index * 28}px` }}
            >
              <Link
                href={`/details/${project.id}`}
                className="grid gap-3 md:grid-cols-[1.1fr_0.95fr] lg:grid-cols-[1.1fr_0.95fr_0.95fr]"
                data-cursor="View Now"
              >
                <div className="relative overflow-hidden rounded-[26px] border border-[#1b2b4d] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-4">
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
                    <div className="mb-6 flex items-center gap-3">
                      <span className="rounded-full border border-[#304977] bg-[linear-gradient(180deg,#101b32_0%,#0c162a_100%)] px-4 py-1 text-sm text-[#c2d8ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        {project.year}
                      </span>

                      <h3 className="text-2xl font-medium text-[#f5f9ff] md:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="mb-6 h-px bg-linear-to-r from-transparent via-[#314a78] to-transparent" />

                    <div className="space-y-2">
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

                          <div className="relative z-10 flex items-center gap-3">
                            <motion.span
                              whileHover={{ scale: 1.08, rotate: 6 }}
                              transition={{ duration: 0.25 }}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_6px_20px_rgba(143,180,255,0.22)]"
                            >
                              <Check size={14} />
                            </motion.span>

                            <p className="text-base text-[#a9bbd9] md:text-lg">
                              {item}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <OrbitTag key={i}>{tag}</OrbitTag>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative aspect-4/3 overflow-hidden rounded-[26px] border border-[#1b2b4d]"
                >
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,29,0.05)_0%,rgba(7,13,29,0.28)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[#7ca8ff]/[0.06] mix-blend-soft-light" />

                  <motion.button
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 z-10 rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-5 py-2 text-sm font-medium text-[#08111f] shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-white/18 lg:hidden"
                  >
                    View Now
                  </motion.button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative hidden aspect-4/3 overflow-hidden rounded-[26px] border border-[#1b2b4d] lg:block"
                >
                  <img
                    src={project.image2}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,29,0.05)_0%,rgba(7,13,29,0.28)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[#7ca8ff]/[0.06] mix-blend-soft-light" />
                </motion.div>
              </Link>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
}