import { Menu, Moon, Sun, X } from "lucide-react";
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
      } text-14px font-medium `}
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

export default function Navbar({ darkMode, setDarkMode }) {
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
    <header className="sticky top-0 z-50 w-full transition-all duration-500">
      <div className="mx-auto flex max-w-480 items-center justify-between px-5 py-4 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="shrink-0">
          <h1
            className={`text-[30px] md:text-[34px] font-black tracking-[-2px] transition-colors duration-500 ${
              darkMode ? "text-white" : "text-[#111111]"
            }`}
          >
            Aurevian
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden items-center justify-center rounded-[20px] px-8 py-2 lg:flex backdrop-blur-xl transition-all duration-500 ${
            darkMode
              ? scrolled
                ? "bg-[rgba(20,20,22,0.6)] backdrop-blur-xl"
                : "bg-[rgba(20,20,22,0.92)] backdrop-blur-[6rem]"
              : scrolled
                ? "bg-[rgba(255,255,255,0.6)] backdrop-blur-xl"
                : "bg-[#e9e9e9] backdrop-blur-[6rem]"
          }`}
        >
          <ul className="flex items-center gap-10 xl:gap-14">
            {navItems.map((item) => {
              const isActive = active === item;
              const isPrevious = previous === item;

              return (
                <li key={item} className="relative">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="group relative py-2"
                  >
                    <RollingText
                      text={item}
                      active={isActive}
                      previous={isPrevious}
                      darkMode={darkMode}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-12.5  w-12.5  items-center justify-center rounded-full border transition-all duration-500 ${
              darkMode
                ? "border-white/20 bg-transparent text-white hover:bg-white/5"
                : "border-black/10 bg-[#f1f1f1] text-[#111111] hover:bg-[#e7e7e7]"
            }`}
          >
            {darkMode ? (
              <Moon size={18} strokeWidth={1.8} />
            ) : (
              <Sun size={18} strokeWidth={1.8} />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-12.5 w-12.5 items-center justify-center rounded-full lg:hidden transition-all duration-300 ${
              darkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"
            }`}
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
        <div
          className={`mx-5 rounded-[20px] px-6 py-5 md:mx-10 transition-all duration-500 ${
            darkMode
              ? "bg-[rgba(20,20,24,0.8)] backdrop-blur-xl"
              : "bg-[rgba(255,255,255,0.7)] backdrop-blur-xl"
          }`}
        >
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
                      darkMode={darkMode}
                    />

                    <span
                      className={`absolute left-0 h-0.5 rounded-full transition-all duration-500 ${
                        isActive
                          ? `-bottom-1 w-full opacity-100 ${
                              darkMode ? "bg-white" : "bg-[#111111]"
                            }`
                          : "-bottom-1 w-0 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
