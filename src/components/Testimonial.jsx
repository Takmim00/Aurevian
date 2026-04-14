import { MessageSquareText } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      '"Agenciy felt like an extension of our team. Their design instincts and speed were exactly what we needed to launch on time — and with style."',
    name: "Sarah Coleman",
    role: "CEO of NovaTech",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    position: "top-left",
  },
  {
    id: 2,
    quote:
      '"From the first call to the final handoff, everything was seamless. The UI/UX work was some of the best we\'ve seen."',
    name: "Daniel Reyes",
    role: "Product Manager at Clarity CRM",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    position: "top-right",
  },
  {
    id: 3,
    quote:
      '"We came to Agenciy with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended."',
    name: "Rachel Lin",
    role: "Co-Founder at Driftly",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    position: "middle-left",
  },
  {
    id: 4,
    quote:
      '"Their process is clear, communication is fast, and the results speak for themselves. We saw a 40% boost in engagement post-launch."',
    name: "Jason Ford",
    role: "Marketing Lead at BrightChain",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    position: "bottom-center",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/testimonial-bg.png"
          alt="testimonial background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-gray-300 border border-gray-700 rounded-full bg-white/5 backdrop-blur">
            <MessageSquareText size={16} />
            Testimonials
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            <span className="block italic font-serif text-gray-300">
              Hear from the Clients
            </span>
            <span className="block font-semibold">We've Partnered With</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
