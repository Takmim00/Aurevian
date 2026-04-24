import AOS from "aos";
import "aos/dist/aos.css";
import { MessageSquareText } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      '"Agenciy felt like an extension of our team. Their design instincts and speed were exactly what we needed to launch on time — and with style."',
    name: "Sarah Coleman",
    role: "CEO of NovaTech",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    quote: `"From the first call to the final handoff, everything was seamless. The UI/UX work was some of the best we've seen."`,
    name: "Daniel Reyes",
    role: "Product Manager at Clarity CRM",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    quote:
      '"We came to Agenciy with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended."',
    name: "Rachel Lin",
    role: "Co-Founder at Driftly",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    quote:
      '"Their process is clear, communication is fast, and the results speak for themselves. We saw a 40% boost in engagement post-launch."',
    name: "Jason Ford",
    role: "Marketing Lead at BrightChain",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

function TestimonialCard({ quote, name, role, avatar, className = "" }) {
  return (
    <div data-aos="zoom-in" className={`text-white ${className}`}>
      <div
        className="relative rounded-[20px] border border-[#22345b]/60 bg-[#0b1224]/60 p-5 backdrop-blur-[22px] sm:p-6"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 40px rgba(80,120,255,0.08)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-transparent bg-[radial-gradient(circle_at_top,rgba(143,180,255,0.15),transparent_60%)] opacity-40" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.4),transparent)]" />

        <p className="relative z-10 max-w-85 text-[15px] leading-normal tracking-[-0.02em] text-[#c3d3ee] sm:text-[16px] lg:text-[18px]">
          {quote}
        </p>
      </div>

      <div className="relative mt-2 flex items-center gap-3 sm:gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full sm:h-13 sm:w-13 lg:h-14.5 lg:w-14.5">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(143,180,255,0.15),rgba(143,180,255,0.7),rgba(143,180,255,0.15))] blur-[6px] opacity-70" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-[#2a3f6e] bg-[#0f1a33]/90 p-1">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold leading-none tracking-[-0.03em] text-[#f4f8ff] sm:text-[19px] lg:text-[20px]">
            {name}
          </h3>
          <p className="mt-1 text-[14px] leading-none tracking-[-0.02em] text-[#8ea4c9] sm:text-[15px] lg:text-[18px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#050816] pb-10 md:pb-0  sm:py-20 lg:min-h-screen lg:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/testimonial-bg.png"
          alt="testimonial background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050816]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,180,255,0.10),transparent_55%)]" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex pb-8 md:pb-0 md:min-h-[50vh] items-center justify-center px-4 text-center lg:min-h-screen lg:pt-0">
        <div className="max-w-225">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#22345b] bg-[#0b1224] px-4 py-2 text-xl text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)] backdrop-blur-sm">
            <MessageSquareText size={16} className="mr-2 text-[#8fb4ff]" />
            <span className="text-[#8fb4ff]">Testimonials</span>
          </div>

          <h2 className="leading-[0.95]">
            <span className="block font-serif text-[36px] italic tracking-[-0.04em] text-[#f4f8ff] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
              Hear from the Clients
            </span>
            <span className="block bg-linear-to-r from-[#dbe7ff] to-[#8fb4ff] bg-clip-text text-[34px] font-semibold tracking-[-0.05em] text-transparent sm:text-[44px] md:text-[52px] lg:text-[58px] xl:text-[64px]">
              We've Partnered With
            </span>
          </h2>
        </div>
      </div>

      {/* Cards (mobile/tablet) */}
      <div className="relative z-20 mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:hidden">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>

      {/* Cards (desktop absolute) */}
      <div className="absolute inset-0 z-20 mx-auto hidden max-w-400 lg:block">
        <TestimonialCard
          {...testimonials[0]}
          className="absolute left-[8%] top-[6%]"
        />
        <TestimonialCard
          {...testimonials[1]}
          className="absolute right-[4%] top-[12%]"
        />
        <TestimonialCard
          {...testimonials[2]}
          className="absolute left-[2%] top-[48%]"
        />
        <TestimonialCard
          {...testimonials[3]}
          className="absolute right-[10%] bottom-[6%]"
        />
      </div>
    </section>
  );
}