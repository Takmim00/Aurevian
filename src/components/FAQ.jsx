import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What kind of projects does Aurevian work on?",
    answer:
      "We design and build modern websites, SaaS platforms, AI-powered products, mobile experiences, and high-converting digital interfaces for startups and growing brands.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We can take care of strategy, UI/UX design, frontend development, backend integration, and launch support so the whole experience feels consistent from idea to delivery.",
  },
  {
    question: "Can you redesign an existing product or website?",
    answer:
      "Absolutely. We regularly improve outdated interfaces, clarify product structure, modernize visuals, and rebuild experiences for better performance, trust, and conversions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "That depends on scope, but smaller websites can move fast while larger product engagements usually run in phases. Once the scope is clear, we define a practical timeline and milestones.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We can continue with optimization, fixes, feature enhancements, performance improvements, and ongoing technical support after the initial launch.",
  },
];

function FaqItem({ item, index, activeIndex, setActiveIndex }) {
  const isOpen = activeIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="overflow-hidden rounded-[26px] border border-white/10 bg-white/3 backdrop-blur-xl"
    >
      <button
        type="button"
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
      >
        <div className="flex items-start gap-4">
          <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85">
            <HelpCircle size={18} />
          </div>

          <div>
            <h3 className="text-[18px] font-medium leading-snug tracking-[-0.03em] text-white sm:text-[21px]">
              {item.question}
            </h3>
            <p className="mt-2 text-sm text-white/42">Click to expand</p>
          </div>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-[4.9rem] text-[15px] leading-7 text-white/64 sm:px-7 sm:pb-7 sm:pl-[5.8rem] sm:text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-8 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-white/6 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.06)_1px, transparent_1px), linear-gradient(90deg, rgba(255, 255, 255,0.06)_1px, transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#1b1b1b] px-5 py-2 text-xl text-[#eeeeee] shadow-[inset_1.5px_1.5px_2px_rgba(255,255,255,0.15)]">
              <span className="opacity-80">⌘</span>
              <span>FAQ</span>
            </div>

            <h2 className="max-w-165 text-[40px] leading-none tracking-[-0.05em] text-white sm:text-[52px] md:text-[62px] lg:text-[72px]">
              <span className="mr-2 font-serif italic">Answers</span>
              <span className="font-light text-white/92">to Common Questions</span>
            </h2>
          </div>

          <p className="max-w-95 text-sm leading-[1.65] text-white/48 md:text-[15px]">
            Clear, simple answers about how we work, what we build, and what to
            expect when partnering with Aurevian.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
