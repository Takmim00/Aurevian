import { BadgeCentIcon } from "lucide-react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";

const serviceItems = [
  "AI Product Engineering",
  "Web Platforms",
  "Automation Systems",
  "Brand Experience",
];

const circleText = "AUREVIAN • AI SOFTWARE • AGENCY • ";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#03060B] pt-28 lg:pt-32"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 z-1 h-full w-full object-cover opacity-60 mix-blend-screen"
        src="/heroBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Video Blue Color Tint */}
      <div className="pointer-events-none absolute inset-0 z-2 bg-[#005290] mix-blend-color" />

      {/* Video Edge Fade / Vignette */}
      <div className="pointer-events-none absolute inset-0  z-3 bg-[radial-gradient(circle,transparent_30%,#03060B_100%)]" />

      {/* Gradient Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-4 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-85 w-205 -translate-x-1/2 rounded-full bg-[#8fb4ff]/10 blur-[110px]" />

        <div
          className="animate-pulse-glow absolute top-[22%] -left-28 h-80 w-80 rounded-full bg-[#8fb4ff]/14 blur-3xl"
          style={{
            transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))",
          }}
        />

        <div
          className="animate-pulse-glow absolute bottom-[18%] -right-24 h-72 w-72 rounded-full bg-[#6c96ff]/14 blur-3xl"
          style={{
            transform:
              "translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))",
            animationDelay: "1.5s",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,180,255,0.10)_0%,rgba(143,180,255,0.05)_22%,rgba(5,8,22,0)_48%,rgba(5,8,22,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(143,180,255,0.10),transparent_26%),radial-gradient(circle_at_82%_68%,rgba(108,150,255,0.10),transparent_24%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-[linear-gradient(180deg,rgba(5,8,22,0)_0%,rgba(5,8,22,0.18)_42%,rgba(5,8,22,0.48)_100%)]" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-5 bg-[#050816]/42" />

      {/* Content */}
      <section className="relative z-10 overflow-hidden px-4 py-16 pb-16 pt-1 text-white md:px-8 md:pb-24 lg:px-10 lg:pt-10 xl:px-12 2xl:px-14">
        <div className="relative mx-auto flex max-w-400 flex-col justify-between">
          {/* Heading */}
          <div className=" md:pt-10 lg:pt-8">
            <h1 className="max-w-237.5 text-[38px] font-medium leading-[1.05] text-[#f4f8ff] sm:text-[52px] md:text-[64px] lg:text-[72px]">
              Engineering intelligent
              <br className="hidden sm:block" /> products for the next era.
            </h1>
          </div>

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_320px_1fr] lg:gap-8 xl:grid-cols-[1fr_360px_1fr]">
            <div className="order-1 flex items-center justify-center pt-2 lg:order-2">
              <div className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60 md:h-65 md:w-65">
                <div className="rotating-ring absolute inset-0">
                  <svg
                    viewBox="0 0 300 300"
                    className="h-full w-full overflow-visible"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="hero-circle-path"
                        d="M150,150 m-98,0 a98,98 0 1,1 196,0 a98,98 0 1,1 -196,0"
                      />
                    </defs>

                    <text
                      className="hero-ring-text"
                      fill="rgba(219,231,255,0.9)"
                      fontSize="18"
                      fontWeight="500"
                      textAnchor="middle"
                    >
                      <textPath
                        href="#hero-circle-path"
                        startOffset="50%"
                        textLength="615"
                        lengthAdjust="spacing"
                      >
                        {circleText}
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="hero-logo-shell relative flex h-22 w-22 items-center justify-center rounded-full border border-[#89aef7]/28 bg-[#0b1224]/72 p-4 shadow-[0_0_45px_rgba(143,180,255,0.16)] backdrop-blur-xl sm:h-24.5 sm:w-24.5 md:h-29 md:w-29 md:p-5">
                  <img
                    src="/aurevian.png"
                    alt="Aurevian logo"
                    className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(143,180,255,0.28)]"
                  />
                </div>
              </div>
            </div>

            <div className="order-2 flex max-w-130 flex-wrap justify-center gap-3 self-end lg:order-1 lg:justify-start md:mb-5">
              {serviceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#29406f] bg-[#0b1224]/72 px-3 py-2.5 text-center text-sm font-medium text-[#dbe7ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(120,160,255,0.03)] backdrop-blur-sm sm:px-5 sm:py-3 md:text-base "
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="order-3 max-w-140 justify-self-end text-center lg:order-3 lg:pb-5 lg:text-left">
              <p className="mx-auto max-w-135 leading-[1.7] text-[#b7c6e0] md:leading-[1.58] lg:mx-0">
                We build AI-first software products that turn ambitious ideas
                into scalable digital experiences — from intelligent web
                platforms and SaaS systems to automation workflows built for
                modern brands.
              </p>

              <div className="mt-8 w-full max-w-140 border-t border-white/10 pt-6">
                <div className="flex flex-col items-center justify-between gap-5 sm:flex-row lg:items-center">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white md:text-[30px]">
                    Contact Us
                  </h3>

                  <div className="flex items-center gap-3 md:gap-4">
                    <a href="#" aria-label="Facebook" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#89aef7]/40 hover:bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] hover:text-[#08111f]">
                      <FaFacebook size={18} />
                    </a>
                    <a href="#" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#89aef7]/40 hover:bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] hover:text-[#08111f]">
                      <FaInstagram size={18} />
                    </a>
                    <a href="#" aria-label="Dribbble" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#89aef7]/40 hover:bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] hover:text-[#08111f]">
                      <FaDribbble size={18} />
                    </a>
                    <a href="#" aria-label="Behance" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#89aef7]/40 hover:bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] hover:text-[#08111f]">
                      <BadgeCentIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}