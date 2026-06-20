"use client";
import { Bot, Workflow, Brain, Cpu, Database, Lock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "LLM Integration",
    description:
      "Seamlessly integrate GPT-4, Claude, and custom language models into your applications.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description:
      "Automate complex business processes with intelligent decision-making systems.",
  },
  {
    icon: Brain,
    title: "Custom Models",
    description:
      "Train and deploy custom AI models tailored to your specific business needs.",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description:
      "Deploy AI capabilities at the edge for real-time, low-latency processing.",
  },
  {
    icon: Database,
    title: "Vector Search",
    description:
      "Implement semantic search and RAG systems for intelligent information retrieval.",
  },
  {
    icon: Lock,
    title: "Secure AI",
    description:
      "Enterprise-grade security and privacy for all your AI implementations.",
  },
];

const orbitNodes = [
  { left: "84%", top: "50%", delay: "0s", icon: Database },
  { left: "68%", top: "79%", delay: "0.8s", icon: Lock },
  { left: "32%", top: "79%", delay: "1.4s", icon: Brain },
  { left: "16%", top: "50%", delay: "2s", icon: Cpu },
  { left: "32%", top: "21%", delay: "2.6s", icon: Bot },
  { left: "68%", top: "21%", delay: "3.2s", icon: Workflow },
];

export default function AIFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 md:py-32 px-4 md:px-8 lg:px-10 xl:px-14">

      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-130 w-225 -translate-x-1/2 rounded-full bg-[#8fb4ff]/10 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-80 w-[320px] rounded-full bg-[#6c96ff]/10 blur-[130px]" />
        <div className="absolute left-[6%] bottom-[8%] h-65 w-65 rounded-full bg-[#8fb4ff]/8 blur-[110px]" />
        <div className="absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(143,180,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-400">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
          {/* left */}
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-[#22345b] bg-[#0b1224] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.22em] text-[#8fb4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(120,160,255,0.04)]">
              AI Capabilities
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Not just software —
              <br />
              <span className="bg-[linear-gradient(90deg,#edf4ff_0%,#8fb4ff_42%,#6c96ff_100%)] bg-clip-text text-transparent">
                intelligent systems.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[#9fb0d1] sm:text-[17px]">
              We build AI-first platforms that think, adapt, and scale with your
              business. From intelligent automation to advanced model deployment,
              every layer is designed to feel seamless, powerful, and
              future-ready.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border border-[#1b2848] bg-[linear-gradient(180deg,rgba(11,20,38,0.92)_0%,rgba(9,17,31,0.96)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(120,160,255,0.02)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2f4773] hover:shadow-[0_0_30px_rgba(108,150,255,0.10)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#8fb4ff]/10 to-transparent opacity-80" />
                    <div className="pointer-events-none absolute -right-8 top-6 h-20 w-20 rounded-full bg-[#8fb4ff]/10 blur-2xl transition-all duration-500 group-hover:bg-[#8fb4ff]/20" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#213153] bg-[#0e1830] text-[#8fb4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#36558a] group-hover:bg-[#13203d]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="mb-2 text-[17px] font-semibold text-[#f4f8ff]">
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-6 text-[#97a8ca]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right premium visual */}
          <div className="relative">
            <div className="group relative mx-auto max-w-145 perspective-[1600px]">
              <div className="pointer-events-none absolute -inset-8 rounded-[42px] bg-[#8fb4ff]/10 blur-[90px] opacity-80 transition-all duration-500 group-hover:bg-[#8fb4ff]/15" />
              <div className="pointer-events-none absolute -inset-3 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(143,180,255,0.22),transparent_55%)] blur-3xl" />
              <div className="pointer-events-none absolute -inset-1px rounded-[34px] bg-[linear-gradient(135deg,rgba(143,180,255,0.26),transparent_30%,transparent_65%,rgba(143,180,255,0.14))] opacity-70 blur-md" />

              <div className="relative rounded-[32px] border border-[#1c2a49] bg-[linear-gradient(180deg,rgba(10,18,34,0.96)_0%,rgba(7,13,25,0.98)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(120,160,255,0.03),0_25px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(108,150,255,0.10),0_0_140px_rgba(143,180,255,0.08)] transition-all duration-500 group-hover:border-[#355388] md:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-36 rounded-t-[32px] bg-linear-to-b from-[#8fb4ff]/12 to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] bg-size-[34px_34px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 rounded-b-[32px] bg-linear-to-t from-[#08101d] to-transparent" />

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#8fb4ff]">
                        AI Architecture
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Intelligence Layer
                      </h3>
                    </div>

                    <div className="rounded-full border border-[#22345b] bg-[#0e1830] px-3 py-1 text-xs text-[#d7e5ff] shadow-[0_0_24px_rgba(108,150,255,0.12)]">
                      Premium Active
                    </div>
                  </div>

                  <div
                    className="relative aspect-square overflow-hidden rounded-[28px] border border-[#18243f] bg-[radial-gradient(circle_at_center,rgba(143,180,255,0.10),rgba(8,14,26,0.98)_62%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),inset_0_-30px_80px_rgba(0,0,0,0.25)]"
                    style={{
                      transform:
                        "rotateX(10deg) rotateY(-8deg) translateZ(0)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1b2b4a]/80" />
                    <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#263a62]" />
                    <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2e4675]/70" />

                    <div className="rotate-slow absolute left-1/2 top-1/2 h-[76%] w-[76%] rounded-full border border-dashed border-[#355388]/50" />
                    <div className="rotate-slow-reverse absolute left-1/2 top-1/2 h-[60%] w-[60%] rounded-full border border-dashed border-[#4c73b8]/35" />

                    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb4ff]/10 blur-3xl" />
                    <div className="absolute left-[22%] top-[26%] h-20 w-20 rounded-full bg-[#8fb4ff]/8 blur-2xl" />
                    <div className="absolute right-[18%] bottom-[22%] h-24 w-24 rounded-full bg-[#6c96ff]/10 blur-2xl" />

                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <linearGradient
                          id="line-gradient-premium"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#dce8ff"
                            stopOpacity="0.9"
                          />
                          <stop
                            offset="45%"
                            stopColor="#8fb4ff"
                            stopOpacity="0.75"
                          />
                          <stop
                            offset="100%"
                            stopColor="#5a86ff"
                            stopOpacity="0.6"
                          />
                        </linearGradient>
                      </defs>

                      {orbitNodes.map((item, i) => (
                        <line
                          key={i}
                          className="line-flow"
                          x1="50"
                          y1="50"
                          x2={parseFloat(item.left)}
                          y2={parseFloat(item.top)}
                          stroke="url(#line-gradient-premium)"
                          strokeWidth="0.42"
                          opacity="0.8"
                        />
                      ))}
                    </svg>

                    <div className="pulse-ring absolute left-1/2 top-1/2 h-28 w-28 rounded-full border border-[#8fb4ff]/40" />
                    <div
                      className="pulse-ring absolute left-1/2 top-1/2 h-40 w-40 rounded-full border border-[#8fb4ff]/20"
                      style={{ animationDelay: "1.2s" }}
                    />

                    <div className="ai-float absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                      <div className="core-glow flex h-24 w-24 items-center justify-center rounded-full border border-[#b4ceff]/30 bg-[linear-gradient(180deg,#85b5ff_0%,#4b7aff_100%)]">
                        <Brain className="h-11 w-11 text-white" />
                      </div>
                    </div>

                    {orbitNodes.map((item, i) => {
                      const OrbitIcon = item.icon;

                      return (
                        <div
                          key={i}
                          className="node-drift absolute z-20 flex h-14 w-14 items-center justify-center rounded-full border border-[#28406b] bg-[linear-gradient(180deg,rgba(14,24,48,0.96)_0%,rgba(9,16,29,0.98)_100%)] shadow-[0_0_24px_rgba(108,150,255,0.10),inset_0_1px_0_rgba(255,255,255,0.05)]"
                          style={{
                            left: item.left,
                            top: item.top,
                            animationDelay: item.delay,
                          }}
                        >
                          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#8fb4ff]/10 text-[#8fb4ff] shadow-[0_0_18px_rgba(126,176,255,0.35)]">
                            <div className="absolute inset-0 rounded-full bg-[#7eb0ff]/20 blur-md" />
                            <OrbitIcon className="relative z-10 h-5 w-5" />
                          </div>
                        </div>
                      );
                    })}

                    <div className="pointer-events-none absolute inset-y-0 left-[-20%] w-[38%] rotate-18 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent)] blur-2xl opacity-40" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#1a2743] pt-6">
                    <div className="rounded-2xl border border-[#18243f] bg-[linear-gradient(180deg,rgba(11,18,33,0.92),rgba(8,14,26,0.96))] px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-2xl font-semibold text-[#8fb4ff]">
                        99.9%
                      </p>
                      <p className="mt-1 text-xs tracking-wide text-[#93a6ca]">
                        Uptime
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#18243f] bg-[linear-gradient(180deg,rgba(11,18,33,0.92),rgba(8,14,26,0.96))] px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-2xl font-semibold text-[#7de2a6]">
                        {"<"}100ms
                      </p>
                      <p className="mt-1 text-xs tracking-wide text-[#93a6ca]">
                        Latency
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#18243f] bg-[linear-gradient(180deg,rgba(11,18,33,0.92),rgba(8,14,26,0.96))] px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <p className="text-2xl font-semibold text-[#60a5fa]">
                        10M+
                      </p>
                      <p className="mt-1 text-xs tracking-wide text-[#93a6ca]">
                        API Calls/day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right end */}
        </div>
      </div>
    </section>
  );
}