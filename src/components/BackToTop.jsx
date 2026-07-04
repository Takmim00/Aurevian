"use client";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, { stiffness: 80, damping: 20, mass: 0.5 });
  const scrollPercent = useTransform(smoothProgress, [0, 100], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      rawProgress.set(progress);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rawProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = useTransform(scrollPercent, (v) => circumference - (v / 100) * circumference);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={scrollToTop}
            className="relative flex h-12 w-12 items-center justify-center group cursor-pointer"
            aria-label="Back to top"
          >
            {/* Glass bg */}
            <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]" />
            {/* Progress ring */}
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 44 44">
              <circle
                cx="22" cy="22" r={radius}
                fill="none"
                stroke="#8fb4ff"
                strokeWidth="3"
                className="opacity-15"
              />
              <motion.circle
                cx="22" cy="22" r={radius}
                fill="none"
                stroke="#8fb4ff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
              />
            </svg>
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[#8fb4ff]/10" />
            {/* Icon */}
            <ArrowUp size={18} strokeWidth={3.5} className="relative z-10 text-[#c8d8ff] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
