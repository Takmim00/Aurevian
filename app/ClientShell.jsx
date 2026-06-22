"use client";

import Cursor from "../src/components/Cursor";
import Navbar from "../src/components/Navbar";
import { FocusLight } from "../src/components/FocusLight";
import Footer from "../src/components/Footer";
import SmoothScroll from "../src/components/SmoothScroll";

export default function ClientShell({ children }) {
  return (
    <SmoothScroll>
      <FocusLight />
      <Cursor />
      <Navbar />
      <main className="transition-colors duration-500">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
