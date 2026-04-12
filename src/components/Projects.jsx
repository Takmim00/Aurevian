import { motion } from "framer-motion";
import { Check } from "lucide-react";
import StackingCards, { StackingCardItem } from "./fancy/blocks/stacking-cards";

const projects = [
  {
    year: "2024",
    title: "Lemonide Tech",
    points: [
      "AI Integration",
      "Responsive Design",
      "Custom Layouts",
      "Fast Loading",
    ],
    tags: ["E-Commerce", "Portfolio"],
    image1:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2024",
    title: "Nexus AI",
    points: ["AI Dashboard", "Automation", "Real-time Data", "Clean UI"],
    tags: ["SaaS", "AI"],
    image1:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2023",
    title: "Green Harvest",
    points: ["E-commerce", "Cart System", "Wishlist", "Fast API"],
    tags: ["Shop", "Organic"],
    image1:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

function OrbitTag({ children }) {
  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative overflow-hidden rounded-full p-px"
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-80%] rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.05),rgba(255,255,255,1),rgba(255,255,255,0.08),rgba(255,255,255,1),rgba(255,255,255,0.05))]"
      />
      <span className="relative z-10 block rounded-full border border-white/10 bg-[#0a0a0a] px-4 py-2 text-sm text-white">
        {children}
      </span>
    </motion.button>
  );
}

export default function Projects() {
  return (
    <section className="bg-black px-4 py-16  md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      <div className="mx-auto max-w-400">
        <StackingCards className="space-y-5">
          {projects.map((project, index) => (
            <StackingCardItem
              key={index}
              className="sticky rounded-[32px] border border-white/10 bg-[#050505] p-2.5"
              style={{ top: `${100 + index * 28}px` }}
            >
              <div
                className="grid gap-3 lg:grid-cols-[1.1fr_0.95fr_0.95fr]"
                data-cursor="View Now"
              >
                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#080808] p-4">
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
                    className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[90px]"
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
                    className="pointer-events-none absolute -bottom-24 -right-15 h-72 w-72 rounded-full bg-white/5 blur-[100px]"
                  />

                  <motion.div
                    animate={{ x: ["-120%", "140%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1.5,
                    }}
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)]"
                  />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/65">
                        {project.year}
                      </span>

                      <h3 className="text-2xl font-medium text-white md:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="mb-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

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
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.12)_45%,transparent_100%)]"
                          />

                          <div className="relative z-10 flex items-center gap-3">
                            <motion.span
                              whileHover={{ scale: 1.08, rotate: 6 }}
                              transition={{ duration: 0.25 }}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
                            >
                              <Check size={14} />
                            </motion.span>

                            <p className="text-base text-white/75 md:text-lg">
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
                  className="group relative aspect-4/3 overflow-hidden rounded-[26px] border border-white/10"
                >
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group relative aspect-4/3 overflow-hidden rounded-[26px] border border-white/10"
                >
                  <img
                    src={project.image2}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </div>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
}
