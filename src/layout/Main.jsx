import { Outlet } from "react-router-dom";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import { FocusLight } from "../components/FocusLight";

const Main = () => {
  return (
    <div className={`min-h-screen transition-colors duration-500 `}>
      <FocusLight />
      <Cursor />
      <Navbar />
      <main className="transition-colors duration-500">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
