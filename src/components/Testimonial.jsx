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
    <div
      data-aos="zoom-in"
      className={`text-white ${className}`}
    >
      <div
        className="relative rounded-[20px] border border-white/5 bg-white/6 p-5 sm:p-6 lg:p-6 backdrop-blur-[22px]"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <p className="max-w-85 text-[15px] leading-normal tracking-[-0.02em] text-[#b9b9b9] sm:text-[16px] lg:text-[18px]">
          {quote}
        </p>
      </div>

      <div className="relative mt-2 flex items-center gap-3 sm:gap-4">
        <div
          className="flex h-12 w-12 sm:h-13 sm:w-13 lg:h-14.5 lg:w-14.5 items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-[22px]"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          <img
            src={avatar}
            alt={name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold leading-none tracking-[-0.03em] text-[#f1f1f1] sm:text-[19px] lg:text-[20px]">
            {name}
          </h3>
          <p className="mt-1 text-[14px] leading-none tracking-[-0.02em] text-[#8c8c8c] sm:text-[15px] lg:text-[18px]">
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
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:min-h-screen lg:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/testimonial-bg.png"
          alt="testimonial background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Mobile + Tablet Cards */}
      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:hidden">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            quote={item.quote}
            name={item.name}
            role={item.role}
            avatar={item.avatar}
          />
        ))}
      </div>

      {/* Desktop Absolute Cards */}
      <div className="absolute inset-0 z-20 hidden lg:block">
        <TestimonialCard
          quote={testimonials[0].quote}
          name={testimonials[0].name}
          role={testimonials[0].role}
          avatar={testimonials[0].avatar}
          className="absolute left-[8%] top-[6%] xl:left-[13%] xl:top-[4%]"
        />

        <TestimonialCard
          quote={testimonials[1].quote}
          name={testimonials[1].name}
          role={testimonials[1].role}
          avatar={testimonials[1].avatar}
          className="absolute right-[4%] top-[12%] xl:right-[2%] xl:top-[16%]"
        />

        <TestimonialCard
          quote={testimonials[2].quote}
          name={testimonials[2].name}
          role={testimonials[2].role}
          avatar={testimonials[2].avatar}
          className="absolute left-[2%] top-[48%] xl:left-[1%] xl:top-[47%]"
        />

        <TestimonialCard
          quote={testimonials[3].quote}
          name={testimonials[3].name}
          role={testimonials[3].role}
          avatar={testimonials[3].avatar}
          className="absolute right-[10%] bottom-[6%] xl:right-[12%] xl:bottom-[4%]"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex min-h-[50vh] items-center justify-center px-4 pt-14 text-center sm:px-6 lg:min-h-screen lg:pt-0">
        <div className="max-w-225">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-md sm:mb-6 sm:px-5 sm:py-3 sm:text-sm">
            <MessageSquareText size={16} />
            Testimonials
          </div>

          <h2 className="leading-[0.95] text-white">
            <span
              className="block font-serif text-[36px] italic tracking-[-0.04em] text-white sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px]"
              style={{ fontWeight: 400 }}
            >
              Hear from the Clients
            </span>
            <span className="block text-[34px] font-semibold tracking-[-0.05em] text-[#e5e5e5] sm:text-[44px] md:text-[52px] lg:text-[58px] xl:text-[64px]">
              We've Partnered With
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}