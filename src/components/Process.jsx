import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { Code2, Lightbulb, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    id: "/01",
    title: "Discover",
    description:
      "Create visual identities that align with your voice and make lasting impressions.",
    icon: Lightbulb,
  },
  {
    id: "/02",
    title: "Design",
    description:
      "Shape powerful experiences with purpose-driven creativity and thoughtful execution.",
    icon: Pencil,
  },
  {
    id: "/03",
    title: "Develop",
    description:
      "Build scalable solutions that bring your vision to life with precision and performance.",
    icon: Code2,
  },
  {
    id: "/04",
    title: "Launch & Grow",
    description:
      "Introduce your brand with impact through strategic rollouts that captivate and convert.",
    icon: Rocket,
  },
];

// updated zigzag path aligned with 4 cards
const PATH_D = `
  M 360 155
  H 900
  Q 950 155 950 205
  V 315
  Q 950 365 900 365
  H 760
  Q 680 365 680 445
  V 565
  Q 680 635 600 635
  H 300
  Q 240 635 240 695
  V 805
  Q 240 855 290 855
  H 840
`;

export default function Process() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  const dotX = useMotionValue(360);
  const dotY = useMotionValue(155);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.75"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
  });

  useMotionValueEvent(springProgress, "change", (latest) => {
    if (!pathRef.current) return;
    const totalLength = pathRef.current.getTotalLength();
    const clamped = Math.max(0, Math.min(1, latest));
    const point = pathRef.current.getPointAtLength(clamped * totalLength);
    dotX.set(point.x);
    dotY.set(point.y);
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] px-6 py-20 text-white md:px-10 lg:px-12"
    >
      <div className="relative mx-auto max-w-400">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#22345b] bg-[#0b1224] px-4 py-2 text-xl text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)] backdrop-blur-sm">
              <span className="mr-2 text-[#8fb4ff]">≈</span>
              <span className="text-[#8fb4ff]">Our Process</span>
            </div>

            <h2 className="leading-[0.95] tracking-[-0.03em]">
              <span
                className="block text-[42px] font-normal italic text-[#f4f8ff] md:text-[58px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                The Journey to a
              </span>
              <span className="block text-[38px] font-semibold not-italic text-[#f4f8ff] md:text-[54px]">
                Successful Product
              </span>
            </h2>
          </div>

          <p className="max-w-[320px] pt-4 text-left text-[13px] leading-[1.7] text-[#9fb0d1] md:pt-8 md:text-right">
            We keep things lean and collaborative — so ideas go from concept to
            launch without the chaos.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative mx-auto hidden max-w-280 md:block">
          <svg
            className="pointer-events-none absolute left-0 top-0 z-0 h-230 w-full"
            viewBox="0 0 1120 920"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="zigzagGradient"
                x1="240"
                y1="155"
                x2="950"
                y2="855"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6C96FF" stopOpacity="0.95" />
                <stop offset="20%" stopColor="#8FB4FF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D5E4FF" stopOpacity="0.98" />
                <stop offset="80%" stopColor="#8FB4FF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#6C96FF" stopOpacity="0.95" />
              </linearGradient>

              <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* soft glow behind dashed path */}
            <path
              d={PATH_D}
              stroke="#8FB4FF"
              strokeOpacity="0.15"
              strokeWidth="10"
              strokeLinecap="round"
              className="blur-md"
            />

            {/* invisible guide path for moving dot */}
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="transparent"
              strokeWidth="1"
            />

            {/* main hyphen/dashed zigzag line */}
            <path
              d={PATH_D}
              fill="none"
              stroke="url(#zigzagGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 10"
              opacity="0.95"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="160"
                to="0"
                dur="7s"
                repeatCount="indefinite"
              />
            </path>

            {/* moving glow dot */}
            <motion.circle
              cx={dotX}
              cy={dotY}
              r="22"
              fill="#8FB4FF"
              fillOpacity="0.12"
              stroke="#C2D8FF"
              strokeOpacity="0.24"
              strokeWidth="1"
            />

            <motion.circle
              cx={dotX}
              cy={dotY}
              r="12"
              fill="#6C96FF"
              fillOpacity="0.28"
              stroke="#DCE8FF"
              strokeOpacity="0.5"
              strokeWidth="1"
            />

            <motion.circle
              cx={dotX}
              cy={dotY}
              r="6.5"
              fill="#AFCFFF"
              filter="url(#dotGlow)"
            />

            <motion.circle
              cx={dotX}
              cy={dotY}
              r="3"
              fill="white"
              fillOpacity="0.95"
            />
          </svg>

          {/* Cards grid */}
          <div className="relative z-10 grid grid-cols-2 gap-x-32 gap-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={isLeft ? "justify-self-start" : "justify-self-end pt-44"}
                >
                  <div className="group relative overflow-hidden rounded-[30px] border border-[#1b2848] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(120,160,255,0.03)] transition-all duration-500 hover:border-[#314a78]">
                    {/* top subtle blue tint */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#8fb4ff]/10 to-transparent" />

                    {/* top premium line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.55),transparent)]" />

                    {/* content */}
                    <div className="relative z-10 max-w-90">
                      <p className="text-[14px] font-medium tracking-wide text-[#8fb4ff]">
                        {step.id}
                      </p>

                      <h3 className="mt-4 text-4xl font-semibold leading-none text-[#f4f8ff]">
                        {step.title}
                      </h3>

                      <p className="mt-4 mb-3 text-[18px] leading-[1.6] text-[#9fb0d1]">
                        {step.description}
                      </p>
                    </div>

                    {/* half circle */}
                    <div className="pointer-events-none absolute -bottom-37.5 left-1/2 h-80 w-[320px] -translate-x-1/2 rounded-full border border-[#24375f] bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.10),rgba(143,180,255,0.08),transparent_70%)]" />

                    {/* center glow */}
                    <div className="pointer-events-none absolute -bottom-7.5 left-1/2 h-37.5 w-30 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.20),rgba(143,180,255,0.10),transparent_75%)] blur-2xl" />

                    {/* icon */}
                    <div className="absolute -bottom-3 left-1/2 z-1 -translate-x-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.22)] transition-transform duration-500 group-hover:scale-110">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile version */}
        <div className="relative space-y-8 md:hidden">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-[26px] border border-[#1b2848] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#8fb4ff]/8 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.45),transparent)]" />

                <div className="relative z-10 max-w-[85%]">
                  <p className="text-[13px] font-medium tracking-wide text-[#8fb4ff]">
                    {step.id}
                  </p>

                  <h3 className="mt-5 text-[38px] font-semibold leading-none text-[#f4f8ff]">
                    {step.title}
                  </h3>

                  <p className="mt-6 mb-2 text-[16px] leading-[1.65] text-[#9fb0d1]">
                    {step.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-30 left-1/2 h-62.5 w-62.5 -translate-x-1/2 rounded-full border border-[#24375f] bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.10),rgba(143,180,255,0.08),transparent_70%)]" />

                <div className="absolute -bottom-3 left-1/2 z-20 -translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.20)]">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}