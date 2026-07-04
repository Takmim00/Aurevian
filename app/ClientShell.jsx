"use client";

import Cursor from "../src/components/Cursor";
import Navbar from "../src/components/Navbar";
import { FocusLight } from "../src/components/FocusLight";
import Footer from "../src/components/Footer";
import SmoothScroll from "../src/components/SmoothScroll";
import BackToTop from "../src/components/BackToTop";

export default function ClientShell({ children }) {
  return (
    <SmoothScroll>
      <FocusLight />
      <Cursor />
      <Navbar />
      <main className="transition-colors duration-500">{children}</main>
      <BackToTop />
      <Footer />
    </SmoothScroll>
  );
}
