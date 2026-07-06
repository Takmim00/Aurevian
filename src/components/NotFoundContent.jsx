"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Cursor from "./Cursor";

const ringChars = "● SYSTEM ONLINE ● ALL SYSTEMS NOMINAL ● CONNECTION LOST ●";
const ringChars2 = "✦ SCANNING ORBIT ◆ NO SIGNAL ◆ REBOOT SEQUENCE ✦";

export default function NotFoundContent() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      }))
    );
  }, []);

  return (
    <>
      <Cursor />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-[#8fb4ff]/8 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#6c96ff]/8 blur-[160px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(143,180,255,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#8fb4ff]"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-20, 20, -20], opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-[#1f2f57] bg-[#0b1224]/80 px-5 py-2 text-sm text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)] backdrop-blur-md"
        >
          <span className="text-[#8fb4ff]">⌘</span>
          <span className="text-[#8fb4ff]">404 Error</span>
        </motion.div>

        <div className="relative mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="h-48 w-48 rounded-full bg-[#8fb4ff]/6 blur-[60px]"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.svg
              viewBox="0 0 800 200"
              className="relative mx-auto h-48 w-full md:h-56"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <defs>
                <linearGradient id="fourGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f4f8ff" />
                  <stop offset="100%" stopColor="#7fa7ff" />
                </linearGradient>
                <linearGradient id="zeroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8fb4ff" />
                  <stop offset="100%" stopColor="#4a7aff" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="200"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
                letterSpacing="8"
              >
                <tspan fill="url(#fourGrad)">4</tspan>
                <motion.tspan
                  fill="url(#zeroGrad)"
                  animate={{ dx: [0, 12, 0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >0</motion.tspan>
                <tspan fill="url(#fourGrad)">4</tspan>
              </text>
            </motion.svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <svg viewBox="0 0 240 240" className="h-52 w-52 md:h-60 md:w-60">
              <defs>
                <path
                  id="ringPath"
                  d="M 120 20 A 100 100 0 1 1 119.9 20"
                  fill="none"
                />
                <path
                  id="ringPathInner"
                  d="M 120 35 A 85 85 0 1 1 119.9 35"
                  fill="none"
                />
              </defs>
              <motion.text
                className="text-[9px] uppercase tracking-[0.18em]"
                fill="#8fb4ff"
                fillOpacity="0.35"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                <textPath href="#ringPath" startOffset="0%">
                  {ringChars}
                </textPath>
              </motion.text>
              <motion.text
                className="text-[8px] uppercase tracking-[0.16em]"
                fill="#6c96ff"
                fillOpacity="0.25"
                initial={{ rotate: 360 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <textPath href="#ringPathInner" startOffset="0%">
                  {ringChars2}
                </textPath>
              </motion.text>
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto mb-6 inline-block max-w-lg rounded-[32px] border border-[#1b2848] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] px-8 py-6 shadow-[0_0_0_1px_rgba(120,160,255,0.03)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.55),transparent)]" />
            <p className="text-lg leading-relaxed text-[#9fb0d1] md:text-xl">
              <span className="font-serif italic text-[#dce8ff]">Lost</span>{" "}
              <span className="text-[#f4f8ff]">in the void.</span>
            </p>
            <p className="mt-2 text-sm text-[#7f92b6] md:text-base">
              The page you&apos;re looking for has drifted beyond our orbit.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-8 py-3 text-[17px] font-semibold text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.18)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft
              size={20}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Return Home</span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 text-xs tracking-[0.15em] text-[#4a5f82]"
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 0.8, 0.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
          >
            ERROR 404
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
            className="mx-2"
          >
            —
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0.3, 0.7, 0.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 3 }}
          >
            SIGNAL NOT FOUND
          </motion.span>
        </motion.p>
      </div>
    </section>
    </>
  );
}
