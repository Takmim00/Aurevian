"use client";

import { Bot, Workflow, Brain, Cpu, Database, Lock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "LLM Integration",
    description: "Seamlessly integrate GPT-4, Claude, and custom language models into your applications.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description: "Automate complex business processes with intelligent decision-making systems.",
  },
  {
    icon: Brain,
    title: "Custom Models",
    description: "Train and deploy custom AI models tailored to your specific business needs.",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description: "Deploy AI capabilities at the edge for real-time, low-latency processing.",
  },
  {
    icon: Database,
    title: "Vector Search",
    description: "Implement semantic search and RAG systems for intelligent information retrieval.",
  },
  {
    icon: Lock,
    title: "Secure AI",
    description: "Enterprise-grade security and privacy for all your AI implementations.",
  },
];

export default function AIFeatures() {
  return (
    <section className="relative bg-[#050816] py-32">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#8fb4ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-primary">
              AI Capabilities
            </p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Not just software —
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                intelligent systems.
              </span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              We don&apos;t just build applications. We create intelligent systems that learn, adapt, and evolve with your business. Our AI-first approach ensures every solution we deliver is future-proof.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="glass glass-hover group cursor-pointer rounded-xl p-4 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0f1a33] transition-colors group-hover:bg-[#13203d]">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="glass glow-blue rounded-3xl p-8">
                <div className="relative aspect-square">
                  {/* Center node */}
                  <div className="animate-pulse-glow absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600">
                    <Brain className="h-10 w-10 text-white" />
                  </div>

                  {/* Orbiting nodes */}
                  <div className="glass absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110" style={{ left: "90%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <div className="h-4 w-4 rounded-full bg-[#2196ff] animate-pulse" />
                  </div>
                  <div className="glass absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110" style={{ left: "70%", top: "84.64%", transform: "translate(-50%, -50%)" }}>
                    <div className="h-4 w-4 rounded-full bg-[#2196ff] animate-pulse" />
                  </div>
                  <div className="glass absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110" style={{ left: "30%", top: "84.64%", transform: "translate(-50%, -50%)" }}>
                    <div className="h-4 w-4 rounded-full bg-[#2196ff] animate-pulse" />
                  </div>
                  <div className="glass absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110" style={{ left: "10%", top: "50%", transform: "translate(-50%, -50%)" }}>
                    <div className="h-4 w-4 rounded-full bg-[#2196ff] animate-pulse" />
                  </div>
                  <div className="glass absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110" style={{ left: "30%", top: "15.36%", transform: "translate(-50%, -50%)" }}>
                    <div className="h-4 w-4 rounded-full bg-[#2196ff] animate-pulse" />
                  </div>
                  <div className="glass absolute flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110" style={{ left: "70%", top: "15.36%", transform: "translate(-50%, -50%)" }}>
                    <div className="h-4 w-4 rounded-full bg-[#2196ff] animate-pulse" />
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                    <line x1="50" y1="50" x2="70" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.5" />
                    <line x1="50" y1="50" x2="60" y2="67.32" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.5" />
                    <line x1="50" y1="50" x2="40" y2="67.32" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.5" />
                    <line x1="50" y1="50" x2="30" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.5" />
                    <line x1="50" y1="50" x2="40" y2="32.68" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.5" />
                    <line x1="50" y1="50" x2="60" y2="32.68" stroke="url(#line-gradient)" strokeWidth="0.5" opacity="0.5" />
                    <defs>
                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#818CF8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Stats below */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-primary">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-green-400">
                      {"<"}100ms
                    </p>
                    <p className="text-xs text-muted-foreground">Latency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-blue-400">10M+</p>
                    <p className="text-xs text-muted-foreground">API Calls/day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right end */}
        </div>
      </div>
    </section>
  );
}