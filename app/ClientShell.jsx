"use client";

import Cursor from "../src/components/Cursor";
import Navbar from "../src/components/Navbar";
import { FocusLight } from "../src/components/FocusLight";
import Footer from "../src/components/Footer";

export default function ClientShell({ children }) {
  return (
    <>
      <FocusLight />
      <Cursor />
      <Navbar />
      <main className="transition-colors duration-500">{children}</main>
      <Footer />
    </>
  );
}
