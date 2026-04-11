import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["HOME", "ABOUT", "SERVICES", "WORKS", "BLOG", "CONTACT"];

function RollingText({ text, active, previous, darkMode }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (active || previous) {
      setPlay(true);
      const timer = setTimeout(() => setPlay(false), 700);
      return () => clearTimeout(timer);
    }
  }, [active, previous]);

  const letters = text.split("");

  return (
    <span
      className={`rolling-text ${play ? "play" : ""} ${
        darkMode ? "text-white" : "text-[#111111]"
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
  const [active, setActive] = useState("HOME");
  const [previous, setPrevious] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item === active) return;
    setPrevious(active);
    setActive(item);

    setTimeout(() => {
      setPrevious("");
    }, 700);
  };

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-500">
      <div className="mx-auto flex max-w-455 items-center justify-between px-4 py-5 md:px-8 lg:px-10 xl:px-14">
        {/* Logo */}
        <div className="shrink-0">
          <a href="/" className="inline-block">
            <h1 className="font-serif text-[34px] font-semibold italic tracking-[-1.5px] text-white md:text-[42px]">
              Aurevian
            </h1>
          </a>
        </div>

        {/* Desktop Nav Center */}
        <nav
          className={`hidden lg:flex items-center justify-center rounded-full border px-10 py-2 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/45 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "border-white/15 bg-black/35 backdrop-blur-md"
          }`}
        >
          <ul className="flex items-center gap-12 xl:gap-16">
            {navItems.map((item) => {
              const isActive = active === item;
              const isPrevious = previous === item;

              return (
                <li key={item} className="relative">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="group relative py-1"
                  >
                    <RollingText
                      text={item}
                      active={isActive}
                      previous={isPrevious}
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
          <button className="hidden lg:inline-flex items-center gap-4 rounded-full bg-white px-8 py-3 text-[17px] font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
            <span>Let's Chat!</span>
            <ArrowRight size={22} strokeWidth={2} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition-all duration-300 lg:hidden"
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
        <div className="mx-4 rounded-3xl border border-white/10 bg-black/70 px-6 py-6 backdrop-blur-xl md:mx-8">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = active === item;
              const isPrevious = previous === item;

              return (
                <li key={item}>
                  <button
                    onClick={() => {
                      handleNavClick(item);
                      setMenuOpen(false);
                    }}
                    className="group relative py-1"
                  >
                    <RollingText
                      text={item}
                      active={isActive}
                      previous={isPrevious}
                      darkMode={true}
                    />

                    <span
                      className={`absolute left-0 h-0.5 rounded-full transition-all duration-500 ${
                        isActive
                          ? "-bottom-1 w-full opacity-100 bg-white"
                          : "-bottom-1 w-0 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">
            <span>Let's Chat!</span>
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
