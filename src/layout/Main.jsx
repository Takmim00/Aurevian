import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";

const Main = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#0d0d0f] text-white" : "bg-white text-[#111111]"
      }`}
    >
      <Cursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="transition-colors duration-500">
        <Outlet context={{ darkMode, setDarkMode }} />
      </main>
    </div>
  );
};

export default Main;
