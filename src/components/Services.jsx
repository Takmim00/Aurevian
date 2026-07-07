"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "/01",
    title: "Brand Identity",
    description:
      "Create visual identities that align with your voice and make lasting impressions.",
    icon: "/brand.webp",
  },
  {
    id: "/02",
    title: "UI/UX Design",
    description:
      "Focus on user-first interfaces that are both beautiful, intuitive, and purposeful.",
    icon: "/uiux.webp",
  },
  {
    id: "/03",
    title: "Web Development",
    description:
      "Develop high-performance websites and apps built to grow with you.",
    icon: "/development.webp",
  },
  {
    id: "/04",
    title: "Digital Marketing",
    description:
      "Craft data-driven campaigns that attract, engage, and convert — across channels.",
    icon: "/marketing.webp",
  },
  {
    id: "/05",
    title: "AI Automation",
    description:
      "Build smart automation systems that save time and improve business workflows.",
    icon: "/marketing.webp",
  },
  {
    id: "/06",
    title: "SaaS Development",
    description:
      "Create scalable SaaS platforms with clean UX, strong architecture, and speed.",
    icon: "/marketing.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

function ServiceCard({ service, className = "", glow = "right-0 top-0" }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative overflow-hidden rounded-[28px] border border-[#182746] bg-[linear-gradient(180deg,rgba(10,18,34,0.96)_0%,rgba(7,13,25,0.98)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] transition-colors duration-500 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(108,150,255,0.15),0_0_60px_rgba(108,150,255,0.25),0_0_120px_rgba(108,150,255,0.15)] ${className}`}
    >
      <div className={`pointer-events-none absolute ${glow} h-28 w-28 rounded-full bg-[#8fb4ff]/10 blur-3xl`} />

      <div className="relative z-10 h-full">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="mb-4 text-[12px] tracking-[0.15em] text-[#8ea4c9]">
              {service.id}
            </div>
            <h3 className="text-[24px] tracking-[-0.03em] text-[#f4f8ff]">
              {service.title}
            </h3>
          </div>

          <motion.div
            whileHover={{ rotate: -8, scale: 1.12 }}
            className="relative shrink-0"
          >
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb4ff]/10 blur-2xl" />
            <Image
              src={service.icon}
              alt={service.title}
              width={64}
              height={64}
              className="relative z-10 h-16 w-16 object-contain"
            />
          </motion.div>
        </div>

        <p className="mt-5 text-[14px] leading-[1.75] text-[#7f92b6]">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050816] px-4 py-10 text-white md:px-8 lg:px-10 xl:px-12 2xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[8%] h-64 w-64 rounded-full bg-[#8fb4ff]/8 blur-[120px]" />
        <div className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-[#6c96ff]/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-400">
        <div className="mb-14 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1f2f57] bg-[#0b1224] px-5 py-2 text-sm uppercase tracking-[0.16em] text-[#8fb4ff]">
            <span className="opacity-80">⌘</span>
            <span>Our Services</span>
          </div>

          <h2 className="text-[42px] font-normal leading-[0.95] tracking-[-0.04em] text-[#dce8ff] md:text-[62px] lg:text-[78px]">
            <span className="font-serif italic">Built to shape</span>{" "}
            <span className="font-light text-[#f4f8ff]">modern brands</span>
          </h2>

          <p className="mx-auto mt-5 max-w-160 text-[14px] leading-[1.8] text-[#8ea4c9] md:text-[15px]">
            From strategy and aesthetics to engineering and growth, we create
            digital systems that feel premium, intentional, and built to last.
          </p>
        </div>

        <div className="grid gap-5 lg:hidden">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="hidden gap-5 lg:grid lg:grid-cols-12 lg:grid-rows-[200px_200px_200px]"
        >
          <ServiceCard service={services[0]} className="order-1 lg:col-span-3 lg:col-start-1 lg:row-start-1" />
          <ServiceCard service={services[1]} glow="right-0 bottom-0" className="order-2 lg:col-span-3 lg:col-start-1 lg:row-start-2" />
          <ServiceCard service={services[2]} glow="right-0 bottom-0" className="order-3 lg:col-span-3 lg:col-start-1 lg:row-start-3" />

          <motion.article
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            className="order-4 group relative overflow-hidden rounded-[32px] border border-[#1d2d52] bg-[linear-gradient(180deg,rgba(12,21,39,0.98)_0%,rgba(7,13,25,1)_100%)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_90px_rgba(0,0,0,0.30),0_0_60px_rgba(108,150,255,0.08)] lg:col-span-6 lg:col-start-4 lg:row-span-3 lg:row-start-1"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#8fb4ff]/10 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb4ff]/8 blur-[120px]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#24365e] bg-[#0e1830] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#8fb4ff]">
                  Core Capabilities
                </div>

                <h3 className="text-[34px] font-light tracking-[-0.04em] text-[#f4f8ff] md:text-[42px]">
                  Strategy, design,
                  <br />
                  and execution
                </h3>

                <p className="mx-auto mt-4 max-w-130 text-[14px] leading-[1.8] text-[#8ea4c9] md:text-[15px]">
                  We combine design thinking, technical depth, and business
                  clarity to create experiences that not only look exceptional,
                  but perform exceptionally.
                </p>
              </div>

              <div className="relative flex min-h-80 items-center justify-center md:mt-4">
                <div className="absolute h-65 w-65 animate-[spin_24s_linear_infinite] rounded-full border border-[#24375f]" />
                <div className="absolute h-45 w-45 animate-[spin_28s_linear_infinite_reverse] rounded-full border border-[#345286]" />
                <div className="absolute h-30 w-30 rounded-full border border-[#4a6fb0]" />

                {[0, 1, 2, 3].map((i, index) => (
                  <div
                    key={i}
                    className={`absolute flex h-18 w-18 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-[#24365e] bg-[#0e1830]/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${
                      index === 0
                        ? "left-[18%] top-[22%]"
                        : index === 1
                          ? "right-[18%] top-[22%]"
                          : index === 2
                            ? "left-[18%] bottom-[18%]"
                            : "right-[18%] bottom-[18%]"
                    }`}
                    style={{ animationDelay: `${index * 0.25}s` }}
                  >
                    <Image src={services[i].icon} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
                  </div>
                ))}

                <div className="relative z-10 flex h-28 w-28 animate-[glow_3s_ease-in-out_infinite] items-center justify-center rounded-full border border-[#9cbfff]/25 bg-[linear-gradient(180deg,#8fb4ff_0%,#5d86ff_100%)]">
                  <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </motion.article>

          <ServiceCard service={services[3]} glow="left-0 top-0" className="order-5 lg:col-span-3 lg:col-start-10 lg:row-start-1" />
          <ServiceCard service={services[4]} glow="left-0 bottom-0" className="order-6 lg:col-span-3 lg:col-start-10 lg:row-start-2" />
          <ServiceCard service={services[5]} glow="left-0 bottom-0" className="order-7 lg:col-span-3 lg:col-start-10 lg:row-start-3" />
        </motion.div>
      </div>
    </section>
  );
}