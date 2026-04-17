import { Check } from "lucide-react";

const features = ["Precision-Perfect", "3D Interface", "VR Compatibility"];

export default function Details() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-8 text-white md:px-8 lg:px-10 xl:px-12 2xl:px-14 pt-30">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-20 h-72 w-72 rounded-full bg-[#8fb4ff]/8 blur-[130px]" />
        <div className="absolute right-[10%] top-[28%] h-80 w-80 rounded-full bg-[#6c96ff]/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-400">
        {/* Top Header */}
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          <h1 className="text-[56px] font-light leading-none tracking-[-0.065em] text-[#f4f8ff] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[138px]">
            Virtual Reality
          </h1>

          <p className="max-w-85 pt-2 text-[18px] leading-[1.05] text-[#dbe7ff] sm:text-[20px] md:justify-self-end">
            Futuristic tech meets fearless design — branding for the next-gen
            AR headset.
          </p>
        </div>

        {/* First Showcase */}
        <ShowcaseCard image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80" />

        {/* Overview */}
        <ContentBlock
          title="Project Overview"
          paragraphs={[
            "This project focused on redefining the virtual reality encounter to deliver a more immersive, emotionally engaging, and intuitive user experience. The objective was to craft a seamless blend of storytelling and interaction that would resonate deeply with users and push the boundaries of digital engagement. Collaborating closely with stakeholders, we identified key goals around immersion, accessibility, and performance optimization. From early concept sketches to high-fidelity prototypes, every phase was guided by a commitment to user-centric design and narrative cohesion. Our role was to bridge the gap between technology and emotion by designing a VR experience that was not only visually compelling but also intuitive and impactful. We initiated the process with in-depth discovery sessions and user flow mapping to define key interactions, understand user motivations, and ensure alignment with strategic objectives. This foundation shaped a compelling and cohesive experience from start to finish.",
            "In an evolving landscape of immersive technology, the brand came to us with a clear vision — to reimagine their virtual reality encounter in a way that not only reflected their core identity but also laid the groundwork for future innovation. Their existing VR experience felt disjointed, lacked narrative cohesion, and struggled to fully engage users on an emotional or interactive level. The challenge was to transform this fragmented environment into a seamless, intuitive journey that could captivate audiences and scale with advancing technology.",
          ]}
        />

        <Divider />

        {/* Identity + Feature list */}
        <section className="py-10 md:py-14">
          <h2 className="mb-6 text-[28px] font-medium tracking-[-0.03em] text-[#f4f8ff] md:text-[40px]">
            Visual Identity & Component Architecture
          </h2>

          <p className="max-w-362.5 text-[15px] leading-[1.85] text-[#9fb0d1] md:text-[16px]">
            Once the strategy was finalized, we moved into the design and
            development of the virtual reality experience. Our UX process began
            with low-fidelity spatial sketches and interaction flows to define
            user movement, engagement points, and environmental hierarchy. After
            validating core interactions, we advanced to high-fidelity 3D
            prototypes, focusing on immersive UI elements and tactile feedback.
            These designs laid the foundation for a cohesive VR design system
            that seamlessly blended visual storytelling with intuitive user
            interaction.
          </p>

          <div className="mt-8 space-y-3">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#29406f] bg-[#0f1a33] text-[#dbe7ff]">
                  <Check size={13} />
                </span>
                <span className="text-[15px] text-[#dbe7ff] md:text-[16px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Second Showcase */}
        <ShowcaseCard image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80" withButton />

        {/* Final Section */}
        <section className="py-10 md:py-14">
          <h2 className="mb-6 text-[28px] font-medium tracking-[-0.03em] text-[#f4f8ff] md:text-[40px]">
            Real-Time Environmental Feedback
          </h2>

          <p className="max-w-362.5 text-[15px] leading-[1.85] text-[#9fb0d1] md:text-[16px]">
            Ensuring real-time environmental feedback was a core focus
            throughout the development of the virtual reality experience. In
            immersive spaces, users expect their actions—whether through gaze,
            gesture, or motion—to instantly influence their surroundings. To
            meet this expectation, we engineered responsive interaction loops
            that delivered immediate visual, auditory, and haptic feedback.
            Dynamic environmental cues—like lighting changes, object animations,
            and spatial audio—were triggered based on real-time input to
            reinforce user presence and immersion. We conducted extensive
            testing across multiple VR platforms and hardware configurations to
            validate latency, synchronization accuracy, and the consistency of
            user feedback. Performance optimizations such as lightweight
            shaders, level-of-detail adjustments, and input prediction
            algorithms helped maintain fluid responsiveness.
          </p>
        </section>
      </div>
    </section>
  );
}

function ShowcaseCard({ image, withButton = false }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="relative overflow-hidden rounded-[34px] border border-[#1b2848] bg-[#070d1d] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(120,160,255,0.03)] md:rounded-[42px] md:p-4">
        {/* outer top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,205,255,0.5),transparent)]" />

        {/* striped premium background */}
        <div className="absolute inset-0 rounded-[34px] bg-[repeating-linear-gradient(90deg,#03060d_0px,#03060d_20px,#131c2d_24px,#d8e6ff_28px,#131c2d_32px,#03060d_42px)] opacity-[0.34] md:rounded-[42px]" />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.12)_0%,rgba(5,8,22,0.34)_45%,rgba(5,8,22,0.60)_100%)]" />

        {/* side vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,8,22,0.25)_75%,rgba(5,8,22,0.55)_100%)]" />

        <div className="relative flex min-h-85 items-center justify-center py-10 sm:min-h-105 md:min-h-155">
          <div className="relative w-55 sm:w-70 md:w-107.5">
            {/* screen glow */}
            <div className="pointer-events-none absolute -inset-5 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(220,232,255,0.18),rgba(143,180,255,0.08),transparent_70%)] blur-2xl" />

            {/* poster frame */}
            <div className="relative rounded-[20px] border border-[#4f658f] bg-[#0b1224] p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.42)] md:rounded-[24px]">
              <div className="relative overflow-hidden rounded-[16px] border border-[#22345b] bg-[#0b1224] md:rounded-[20px]">
                <img
                  src={image}
                  alt="Project showcase"
                  className="w-full object-cover"
                />

                {/* inner cinematic overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_16%,rgba(0,0,0,0.05)_40%,rgba(5,8,22,0.25)_100%)]" />

                {/* subtle reflection line */}
                <div className="pointer-events-none absolute inset-x-0 top-[30%] h-px bg-white/10" />
              </div>
            </div>

            {withButton && (
              <button className="absolute right-[-18%] top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border border-[#1f2f57] bg-[radial-gradient(circle_at_30%_30%,#1c2436_0%,#0a0f19_68%,#050816_100%)] text-[20px] text-[#f4f8ff] shadow-[0_18px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(120,160,255,0.03)] transition duration-300 hover:scale-105 md:h-36 md:w-36 md:text-[34px]">
                View
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentBlock({ title, paragraphs }) {
  return (
    <section className="py-10 md:py-14">
      <h2 className="mb-6 text-[28px] font-medium tracking-[-0.03em] text-[#f4f8ff] md:text-[40px]">
        {title}
      </h2>

      <div className="space-y-6">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="max-w-370 text-[15px] leading-[1.85] text-[#9fb0d1] md:text-[16px]"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#1b2848]" />;
}