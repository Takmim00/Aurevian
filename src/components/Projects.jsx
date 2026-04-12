import { Check } from "lucide-react";
import StackingCards, { StackingCardItem } from "./fancy/blocks/stacking-cards";

const projects = [
  {
    year: "2024",
    title: "Lemonide Tech",
    points: [
      "AI Integration",
      "Responsive Design",
      "Custom Layouts",
      "Fast Loading",
    ],
    tags: ["E-Commerce", "Portfolio"],
    image1:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2024",
    title: "Nexus AI",
    points: ["AI Dashboard", "Automation", "Real-time Data", "Clean UI"],
    tags: ["SaaS", "AI"],
    image1:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2023",
    title: "Green Harvest",
    points: ["E-commerce", "Cart System", "Wishlist", "Fast API"],
    tags: ["Shop", "Organic"],
    image1:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-[1600px]">
        <StackingCards className="space-y-5">
          {projects.map((project, index) => (
            <StackingCardItem
              key={index}
              className="sticky rounded-[32px] border border-white/10 bg-[#050505] p-2.5"
              style={{
                top: `${100 + index * 28}px`,
              }}
            >
              <div
                className="grid gap-3 lg:grid-cols-[1.1fr_0.95fr_0.95fr]"
                data-cursor="View Now"
              >
                <div className="relative rounded-[26px] border border-white/10 bg-[#080808] p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="rounded-lg border border-white/10 px-4 py-1 text-white/60">
                        {project.year}
                      </span>
                      <h3 className="text-2xl font-medium text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="space-y-4">
                      {project.points.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                            <Check size={14} />
                          </span>
                          <p className="text-lg text-white/70">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group relative aspect-[4/3] overflow-hidden rounded-[26px] border border-white/10">
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative aspect-[4/3] overflow-hidden rounded-[26px] border border-white/10">
                  <img
                    src={project.image2}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
}