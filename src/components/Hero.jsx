import { ArrowRight } from "lucide-react";

const serviceItems = [
  "AI Product Engineering",
  "Web Platforms",
  "Automation Systems",
  "Brand Experience",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 lg:pt-32">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/heroBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/45 " />

      {/* Content */}
      <section className="relative z-10 overflow-hidden px-5 pb-16 pt-8 md:px-10 md:pb-24 lg:px-20 lg:pt-10">
        <div className="relative mx-auto flex max-w-400 flex-col justify-between">
          <div className="pt-6 md:pt-10 lg:pt-14">
            <h1 className="text-4xl font-medium text-white sm:text-[72px]">
              Engineering intelligent
              <br /> products for the next era.
            </h1>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px_1fr] lg:gap-8 xl:grid-cols-[1fr_360px_1fr]">
            <div className="flex max-w-130 flex-wrap gap-3 self-end">
              {serviceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/18 bg-white/3 px-5 py-3 text-sm font-medium text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:text-base"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center pt-2">
              <div className="relative flex h-60 w-60 items-center justify-center md:h-70 md:w-70">
                <div className="rotating-ring absolute inset-0">
                  <svg
                    viewBox="0 0 300 300"
                    className="h-full w-full overflow-visible"
                  >
                    <defs>
                      <path
                        id="hero-circle-path"
                        d="M150,150 m-102,0 a102,102 0 1,1 204,0 a102,102 0 1,1 -204,0"
                      />
                    </defs>
                    <text
                      fill="rgba(255,255,255,0.88)"
                      fontSize="20"
                      letterSpacing="7"
                      fontWeight="400"
                    >
                      <textPath href="#hero-circle-path" startOffset="0%">
                        AUREVIAN • AI SOFTWARE • AGENCY •
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="hero-logo-shell relative flex h-24.5 w-24.5 items-center justify-center rounded-full border border-[#7ed8ff]/35 bg-black/45 p-5 shadow-[0_0_45px_rgba(90,200,255,0.18)] backdrop-blur-xl md:h-29 md:w-29">
                  <img
                    src="/aurevian.png"
                    alt="Aurevian logo"
                    className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(71,191,255,0.32)]"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-140 justify-self-end lg:pb-5">
              <p className="text-shadow-md max-w-135 leading-[1.7] text-white/78 md:leading-[1.58]">
                We build AI-first software products that turn ambitious ideas
                into scalable digital experiences — from intelligent web
                platforms and SaaS systems to automation workflows built for
                modern brands.
              </p>

              <button className="group mt-8 inline-flex items-center overflow-hidden rounded-2xl bg-white text-black transition-transform duration-300 hover:-translate-y-1">
                <span className="px-7 py-4 text-base font-semibold uppercase tracking-[0.02em] md:px-8 md:py-5 md:text-lg">
                  Know More
                </span>
                <span className="m-1 flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5 md:h-16 md:w-16">
                  <ArrowRight size={24} strokeWidth={1.8} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}