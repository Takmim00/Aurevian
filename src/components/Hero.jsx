import { ArrowRight } from "lucide-react";

const serviceItems = [
  "AI Product Engineering",
  "Web Platforms",
  "Automation Systems",
  "Brand Experience",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 lg:pt-32"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/heroBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Background Effects */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {/* Left Orb */}
        <div
          className="animate-pulse-glow absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#8fb4ff]/18 blur-3xl"
          style={{
            transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))",
          }}
        />

        {/* Right Orb */}
        <div
          className="animate-pulse-glow absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-[#6c96ff]/18 blur-3xl"
          style={{
            transform:
              "translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))",
            animationDelay: "1.5s",
          }}
        />

     
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-2 bg-[#050816]/62" />

      {/* Content */}
      <section className="relative z-10 overflow-hidden px-4 py-16 pb-16 pt-8 text-white md:px-8 md:pb-24 lg:px-10 lg:pt-10 xl:px-12 2xl:px-14">
        <div className="relative mx-auto flex max-w-400 flex-col justify-between">
          <div className="pt-6 md:pt-10 lg:pt-8">
            <h1 className="text-4xl font-medium leading-tight text-[#f4f8ff] sm:text-[72px]">
              Engineering intelligent
              <br /> products for the next era.
            </h1>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px_1fr] lg:gap-8 xl:grid-cols-[1fr_360px_1fr]">
            <div className="flex max-w-130 flex-wrap gap-3 self-end">
              {serviceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#29406f] bg-[#0b1224]/72 px-5 py-3 text-sm font-medium text-[#dbe7ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(120,160,255,0.03)] backdrop-blur-sm md:text-base"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center pt-2">
              <div className="relative flex h-60 w-60 items-center justify-center md:h-65 md:w-65">
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
                      fill="rgba(219,231,255,0.9)"
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

                <div className="hero-logo-shell relative flex h-24.5 w-24.5 items-center justify-center rounded-full border border-[#89aef7]/28 bg-[#0b1224]/72 p-5 shadow-[0_0_45px_rgba(143,180,255,0.16)] backdrop-blur-xl md:h-29 md:w-29">
                  <img
                    src="/aurevian.png"
                    alt="Aurevian logo"
                    className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(143,180,255,0.28)]"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-140 justify-self-end lg:pb-5">
              <p className="max-w-135 leading-[1.7] text-[#b7c6e0] md:leading-[1.58]">
                We build AI-first software products that turn ambitious ideas
                into scalable digital experiences — from intelligent web
                platforms and SaaS systems to automation workflows built for
                modern brands.
              </p>

              <button className="group mt-8 inline-flex items-center overflow-hidden rounded-2xl border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.18)] transition-transform duration-300 hover:-translate-y-1">
                <span className="px-7 py-4 text-base font-semibold uppercase tracking-[0.02em] md:px-8 md:py-5 md:text-lg">
                  Know More
                </span>
                <span className="m-1 flex h-14 w-14 items-center justify-center rounded-xl bg-[#08111f] text-[#f4f8ff] transition-transform duration-300 group-hover:translate-x-0.5 md:h-16 md:w-16">
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