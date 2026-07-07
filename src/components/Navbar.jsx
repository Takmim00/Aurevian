"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = ["HOME", "SERVICES", "ABOUT", "PROJECTS", "PROCESS", "CONTACT"];

function RollingText({ text, active, darkMode }) {
  const [play, setPlay] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (active) {
      setPlay(true);
      const timer = setTimeout(() => setPlay(false), 700);
      return () => clearTimeout(timer);
    } else {
      setPlay(false);
    }
  }, [active]);

  const letters = text.split("");

  return (
    <span
      className={`rolling-text ${play ? "play" : ""} ${
        darkMode ? "text-[#eaf2ff]" : "text-[#111111]"
      } text-[14px] font-medium`}
    >
      {letters.map((letter, index) => (
        <span key={`${text}-${index}`} className="letter inline-block">
          <span className="block">{letter === " " ? "\u00A0" : letter}</span>
          <span className="block">{letter === " " ? "\u00A0" : letter}</span>
        </span>
      ))}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else if (currentScrollY < prevScrollY.current) {
        setHidden(false);
      }
      prevScrollY.current = currentScrollY;
      setScrolled(currentScrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActive(item);
    setMenuOpen(false);

    if (item === "HOME") {
      if (!isHome) {
        window.location.href = "/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const sectionId = item.toLowerCase();

    if (isHome) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = "/#" + sectionId;
    }
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}>
      <div className="mx-auto flex max-w-455 items-center justify-between px-4 py-5 md:px-8 lg:px-10 xl:px-14">
        {/* Logo */}
        <div className="shrink-0">
          <a href="/" className="inline-block">
            <h1 className="font-serif text-[34px] font-semibold italic tracking-[-1.5px] text-[#f4f8ff] md:text-[42px]">
              Aurevian
            </h1>
          </a>
        </div>

        {/* Desktop Nav Center */}
        <nav
          className={`hidden lg:flex items-center justify-center rounded-full border px-10 py-2 transition-all duration-500 ${
            scrolled
              ? "border-[#22345b] bg-[#0b1224]/72 shadow-[0_8px_30px_rgba(4,10,24,0.34),0_0_0_1px_rgba(120,160,255,0.03)] backdrop-blur-xl"
              : "border-[#29406f]/80 bg-[#0b1224]/52 backdrop-blur-md"
          }`}
        >
          <ul className="flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => {
              const isActive = active === item;

              return (
                <li key={item} className="relative">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="group relative py-1"
                  >
                    <RollingText
                      text={item}
                      active={isActive}
                      darkMode={true}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick("CONTACT")}
            className="hidden lg:inline-flex items-center gap-4 rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-8 py-3 text-[17px] font-semibold text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.18)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Let's Chat!</span>
            <ArrowRight size={22} strokeWidth={2} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#29406f] bg-[#0b1224]/72 text-[#eaf2ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-125 pb-5" : "max-h-0"
        }`}
      >
        <div className="mx-4 rounded-3xl border border-[#22345b] bg-[#0b1224]/88 px-6 py-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(4,10,24,0.36),0_0_0_1px_rgba(120,160,255,0.03)] md:mx-8">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = active === item;

              return (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="group relative py-1"
                  >
                    <RollingText
                      text={item}
                      active={isActive}
                      darkMode={true}
                    />

                    <span
                      className={`absolute left-0 h-0.5 rounded-full transition-all duration-500 ${
                        isActive
                          ? "-bottom-1 w-full opacity-100 bg-[#8fb4ff]"
                          : "-bottom-1 w-0 opacity-0 bg-[#8fb4ff]"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => handleNavClick("CONTACT")}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-6 py-3.5 text-sm font-semibold text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.18)]"
          >
            <span>Let's Chat!</span>
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
