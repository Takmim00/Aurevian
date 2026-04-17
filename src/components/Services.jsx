const services = [
  {
    id: "/01",
    title: "Brand Identity",
    description:
      "Create visual identities that align with your voice and make lasting impressions.",
    icon: "/brand.png",
  },
  {
    id: "/02",
    title: "UI/UX Design",
    description:
      "Focus on user-first interfaces that are both beautiful, intuitive, and purposes.",
    icon: "/uiux.png",
    floating: true,
  },
  {
    id: "/03",
    title: "Web Development",
    description:
      "Develop high-performance websites and apps built to grow with you.",
    icon: "/development.png",
  },
  {
    id: "/04",
    title: "Digital Marketing",
    description:
      "Craft data-driven campaigns that attract, engage, and convert — across channels.",
    icon: "/marketing.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050816] px-4 py-16 text-white md:px-8 lg:px-10 xl:px-12 2xl:px-14"
    >
      <div className="mx-auto max-w-400">
        <div className="mb-10 md:mb-14">
          {/* Top: Our Services */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1f2f57] bg-[#0b1224] px-5 py-2 text-xl text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)]">
              <span className="opacity-80 text-[#8fb4ff]">⌘</span>
              <span className=" text-[#8fb4ff]">Our Services</span>
            </div>
          </div>

          {/* Bottom: Left + Right */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Left */}
            <h2 className="text-[46px] font-normal leading-none tracking-[-0.03em] text-[#dce8ff] md:text-[64px] lg:text-[72px]">
              <span className="mr-2 font-serif italic text-[#dce8ff]">What</span>
              <span className="font-light text-[#f4f8ff]">We Do</span>
            </h2>

            {/* Right */}
            <p className="max-w-90 text-sm leading-[1.55]  md:text-[15px]">
              We craft digital experiences from idea to launch — blending
              strategy, design, and engineering to build products that performs.
            </p>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[22px] border border-[#1b2848] bg-[#070d1d] md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group relative min-h-61.25 overflow-hidden px-6 pb-9 pt-8 md:min-h-70 md:px-7 xl:min-h-63.75 ${
                index !== services.length - 1
                  ? "border-b border-[#17233f] xl:border-b-0 xl:border-r"
                  : ""
              } ${index === 1 ? "md:border-r-0 xl:border-r" : ""}`}
            >
              {/* hover bg only inside card */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                style={{
                  backgroundImage: "url('/card-bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(108,150,255,0.18) 0%, rgba(108,150,255,0.05) 28%, rgba(255,255,255,0) 52%)",
                }}
              />

              {/* dark overlay for text readability */}
              <div className="pointer-events-none absolute inset-0 bg-[#050816]/0 transition-all duration-700 group-hover:bg-[#050816]/18" />

              <div className="relative z-10 my-8 mb-10 flex h-23 items-center justify-center">
                {service.floating && (
                  <div className="pointer-events-none absolute right-[26%] top-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#29406f] bg-[#0f1a33]/90 shadow-[0_10px_30px_rgba(76,124,255,0.16)] backdrop-blur-md">
                    <div className="h-5 w-5 rotate-45 rounded-md border border-[#4968a8] bg-[#152548] shadow-[inset_0_1px_0_rgba(180,205,255,0.16)]" />
                  </div>
                )}

                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-30 w-30 object-contain opacity-95 transition-transform duration-700 group-hover:scale-105 md:h-35 md:w-35"
                />
              </div>

              <div className="relative z-10 mb-3 text-[12px] tracking-[-0.02em] text-[#8ea4c9]">
                {service.id}
              </div>

              <h3 className="relative z-10 mb-3 text-[22px] font-normal tracking-[-0.03em] text-[#f4f8ff] transition-colors duration-500 group-hover:text-[#b9d0ff]">
                {service.title}
              </h3>

              <p className="relative z-10 max-w-60 text-[14px] leading-[1.6] text-[#7f92b6]">
                {service.description}
              </p>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-[#2a3f6e]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,149,255,0.12),transparent_45%)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}