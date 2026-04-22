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
      "Focus on user-first interfaces that are both beautiful, intuitive, and purposeful.",
    icon: "/uiux.png",
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
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white md:px-8 lg:px-10 xl:px-12 2xl:px-14"
    >
      {/* ambient bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[8%] h-64 w-64 rounded-full bg-[#8fb4ff]/8 blur-[120px]" />
        <div className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-[#6c96ff]/8 blur-[140px]" />
        <div className="absolute bottom-[8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8fb4ff]/6 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-400">
        {/* header */}
        <div className="mb-14 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1f2f57] bg-[#0b1224] px-5 py-2 text-sm uppercase tracking-[0.16em] text-[#8fb4ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)]">
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

        {/* showcase layout */}
        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[260px_260px]">
          {/* top left */}
          <article className="group relative overflow-hidden rounded-[28px] border border-[#182746] bg-[linear-gradient(180deg,rgba(10,18,34,0.96)_0%,rgba(7,13,25,0.98)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#29406f] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28),0_0_45px_rgba(108,150,255,0.10)] lg:col-span-3 lg:row-span-1">
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[#8fb4ff]/10 blur-3xl opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 text-[12px] tracking-[0.15em] text-[#8ea4c9]">
                  {services[0].id}
                </div>
                <h3 className="text-[24px] tracking-[-0.03em] text-[#f4f8ff]">
                  {services[0].title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#7f92b6]">
                  {services[0].description}
                </p>
              </div>

              <div className="relative mt-8 flex justify-end">
                <div className="absolute right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#8fb4ff]/10 blur-2xl" />
                <img
                  src={services[0].icon}
                  alt={services[0].title}
                  className="relative z-10 h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </article>

          {/* center featured */}
          <article className="group relative overflow-hidden rounded-[32px] border border-[#1d2d52] bg-[linear-gradient(180deg,rgba(12,21,39,0.98)_0%,rgba(7,13,25,1)_100%)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_90px_rgba(0,0,0,0.30),0_0_60px_rgba(108,150,255,0.08)] lg:col-span-6 lg:row-span-2">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#8fb4ff]/10 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb4ff]/8 blur-[120px]" />
            <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-[linear-gradient(135deg,rgba(143,180,255,0.16),transparent_35%,transparent_65%,rgba(143,180,255,0.10))] opacity-70 blur-sm" />

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

              <div className="relative mt-10 flex items-center justify-center">
                {/* rings */}
                <div className="absolute h-65 w-65 rounded-full border border-[#24375f]" />
                <div className="absolute h-45 w-45 rounded-full border border-[#345286]" />
                <div className="absolute h-30 w-30 rounded-full border border-[#4a6fb0]" />

                {/* icons around */}
                <div className="absolute left-[18%] top-[22%] flex h-18 w-18 items-center justify-center rounded-2xl border border-[#24365e] bg-[#0e1830]/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <img
                    src={services[0].icon}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="absolute right-[18%] top-[22%] flex h-18 w-18 items-center justify-center rounded-2xl border border-[#24365e] bg-[#0e1830]/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <img
                    src={services[1].icon}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="absolute left-[18%] bottom-[18%] flex h-18 w-18 items-center justify-center rounded-2xl border border-[#24365e] bg-[#0e1830]/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <img
                    src={services[2].icon}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="absolute right-[18%] bottom-[18%] flex h-18 w-18 items-center justify-center rounded-2xl border border-[#24365e] bg-[#0e1830]/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <img
                    src={services[3].icon}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                </div>

                {/* center */}
                <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-[#9cbfff]/25 bg-[linear-gradient(180deg,#8fb4ff_0%,#5d86ff_100%)] shadow-[0_0_40px_rgba(108,150,255,0.28),0_0_100px_rgba(143,180,255,0.14)] transition-transform duration-500 group-hover:scale-105">
                  <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </article>

          {/* top right */}
          <article className="group relative overflow-hidden rounded-[28px] border border-[#182746] bg-[linear-gradient(180deg,rgba(10,18,34,0.96)_0%,rgba(7,13,25,0.98)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#29406f] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28),0_0_45px_rgba(108,150,255,0.10)] lg:col-span-3 lg:row-span-1">
            <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 rounded-full bg-[#8fb4ff]/10 blur-3xl opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 text-[12px] tracking-[0.15em] text-[#8ea4c9]">
                  {services[1].id}
                </div>
                <h3 className="text-[24px] tracking-[-0.03em] text-[#f4f8ff]">
                  {services[1].title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#7f92b6]">
                  {services[1].description}
                </p>
              </div>

              <div className="relative mt-8 flex justify-start">
                <div className="absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#8fb4ff]/10 blur-2xl" />
                <img
                  src={services[1].icon}
                  alt={services[1].title}
                  className="relative z-10 h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </article>

          {/* bottom left */}
          <article className="group relative overflow-hidden rounded-[28px] border border-[#182746] bg-[linear-gradient(180deg,rgba(10,18,34,0.96)_0%,rgba(7,13,25,0.98)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#29406f] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28),0_0_45px_rgba(108,150,255,0.10)] lg:col-span-3 lg:row-span-1">
            <div className="pointer-events-none absolute right-0 bottom-0 h-28 w-28 rounded-full bg-[#6c96ff]/10 blur-3xl opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 text-[12px] tracking-[0.15em] text-[#8ea4c9]">
                  {services[2].id}
                </div>
                <h3 className="text-[24px] tracking-[-0.03em] text-[#f4f8ff]">
                  {services[2].title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#7f92b6]">
                  {services[2].description}
                </p>
              </div>

              <div className="relative mt-8 flex justify-end">
                <div className="absolute right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#8fb4ff]/10 blur-2xl" />
                <img
                  src={services[2].icon}
                  alt={services[2].title}
                  className="relative z-10 h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </article>

          {/* bottom right */}
          <article className="group relative overflow-hidden rounded-[28px] border border-[#182746] bg-[linear-gradient(180deg,rgba(10,18,34,0.96)_0%,rgba(7,13,25,0.98)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#29406f] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28),0_0_45px_rgba(108,150,255,0.10)] lg:col-span-3 lg:row-span-1">
            <div className="pointer-events-none absolute left-0 bottom-0 h-28 w-28 rounded-full bg-[#6c96ff]/10 blur-3xl opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 text-[12px] tracking-[0.15em] text-[#8ea4c9]">
                  {services[3].id}
                </div>
                <h3 className="text-[24px] tracking-[-0.03em] text-[#f4f8ff]">
                  {services[3].title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#7f92b6]">
                  {services[3].description}
                </p>
              </div>

              <div className="relative mt-8 flex justify-start">
                <div className="absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#8fb4ff]/10 blur-2xl" />
                <img
                  src={services[3].icon}
                  alt={services[3].title}
                  className="relative z-10 h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}