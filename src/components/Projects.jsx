import { Check } from "lucide-react";

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
      "https://images.unsplash.com/photo-1606788075761-ec6b1f2f7f3c?auto=format&fit=crop&w=1200&q=80",
    image2:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  },
];
export default function Projects() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-[1540px] space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-[32px] border border-white/10 bg-[#050505] p-[10px]"
          >
            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.95fr_0.95fr]">
              {/* LEFT CARD */}
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
                        <p className="text-white/70 text-lg">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 px-4 py-2 text-white/90 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* IMAGE 1 */}
              <div className="group relative overflow-hidden rounded-[26px] border border-white/10 aspect-[4/3]">
                <img
                  src={project.image1}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* IMAGE 2 */}
              <div className="group relative overflow-hidden rounded-[26px] border border-white/10 aspect-[4/3]">
                <img
                  src={project.image2}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-6 left-6">
                  <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-black">
                    View Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
