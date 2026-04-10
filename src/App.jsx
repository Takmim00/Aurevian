// import {
//   ArrowRight,
//   Cpu,
//   Lightbulb,
//   Facebook,
//   Minus,
//   Plus,
//   Rocket,
//   Shield,
//   Sparkles,
//   Car,
// } from "lucide-react";
// import { useState } from "react";

// const navItems = ["Home", "About", "Benefits", "Contact", "Reviews"];

// const logos = ["NEXTFlows", "dataBites", "MarketSavy", "EpicDev", "BestBank"];

// const serviceCards = [
//   {
//     title: "Hardware Solution",
//     desc: "Our Hardware Solution service provides top-notch hardware tailored to your business needs. We offer installation and support for a wide range of equipment.",
//     rotate: "-rotate-6",
//   },
//   {
//     title: "Software Solution",
//     desc: "Our Software Solution service offers custom, high-quality software to meet your business needs, enhancing efficiency and driving growth.",
//     rotate: "rotate-0",
//     active: true,
//   },
//   {
//     title: "Innovative Solutions",
//     desc: "Our Innovative Solutions service offers creative and cutting-edge strategies to solve complex business challenges.",
//     rotate: "rotate-6",
//   },
// ];

// const testimonials = [
//   {
//     title: "That was incredible!",
//     body: "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and delivered on time with excellent quality.",
//     author: "Byeon Wo Soek",
//   },
//   {
//     title: "That was incredible!",
//     body: "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and delivered on time with excellent quality.",
//     author: "Byeon Wo Soek",
//     active: true,
//   },
//   {
//     title: "That was incredible!",
//     body: "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and delivered on time with excellent quality.",
//     author: "Byeon Wo Soek",
//   },
// ];

// const faqItems = [
//   {
//     q: "What services does your agency offer?",
//     a: "Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing. We specialize in creating high-quality, user-friendly, and visually appealing products that enhance efficiency and drive growth.",
//   },
//   {
//     q: "How do you ensure the quality of your work?",
//     a: "We follow a structured workflow, test thoroughly, and collaborate closely with clients throughout the process.",
//   },
//   {
//     q: "How do you handle project revisions or changes?",
//     a: "We keep revision rounds clear from the start and maintain transparent communication during every stage.",
//   },
//   {
//     q: "What if I'm not satisfied with the final result?",
//     a: "We work with you to resolve concerns and refine the final result to align with project expectations.",
//   },
// ];

// function SectionBadge({ text }) {
//   return (
//     <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
//       <div className="h-6 w-6 rounded-full bg-white/10" />
//       <span className="font-medium text-white">{text}</span>
//     </div>
//   );
// }

// function GlowButton({ children }) {
//   return (
//     <button className="group relative overflow-hidden rounded-full border border-[#77679f] px-6 py-3 text-sm text-white transition hover:scale-[1.02]">
//       <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.45),transparent_70%)] opacity-70" />
//       <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(133,71,246,0.28),rgba(255,255,255,0.04))]" />
//       <span className="relative flex items-center gap-2">
//         {children}
//         <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//       </span>
//     </button>
//   );
// }

// function GlassCard({ children, className = "" }) {
//   return (
//     <div
//       className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(20,15,42,0.45)] ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-white/10 bg-[#070322]/70 px-6 py-4 backdrop-blur-2xl md:px-10 lg:px-20">
//         <div className="flex items-center gap-3">
//           <div className="grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-white/10 text-xs font-bold">
//             S
//           </div>
//           <span className="text-xl font-semibold tracking-wide text-white">
//             Sylphic
//           </span>
//         </div>

//         <nav className="hidden items-center gap-7 rounded-full border border-[#534081] bg-white/[0.03] px-6 py-3 text-sm text-[#dfdfdf] shadow-[0_4px_20px_rgba(0,0,0,0.2)] md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="transition hover:text-white"
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden md:block">
//           <GlowButton>Get Started</GlowButton>
//         </div>
//       </div>
//     </header>
//   );
// }

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden px-4 pt-28 md:px-8 lg:px-0"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,92,255,0.30),transparent_35%)]" />
//       <div className="absolute left-1/2 top-[140px] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#7e57ff]/20 blur-[90px]" />

//       <div className="mx-auto max-w-[1440px]">
//         <div className="relative mx-auto flex min-h-[760px] flex-col items-center">
//           <div className="absolute inset-x-0 top-16 h-[420px] bg-[radial-gradient(circle_at_center,rgba(118,66,255,0.16),transparent_55%)]" />

//           <div className="relative z-10 mt-14 text-center">
//             <h1 className="mx-auto max-w-[1100px] bg-gradient-to-b from-white to-white/35 bg-clip-text text-5xl font-semibold leading-[1.02] text-transparent md:text-7xl lg:text-[110px]">
//               Empower <span className="font-semibold">Modern</span>{" "}
//               <span className="font-semibold">technology</span>
//             </h1>
//           </div>

//           <div className="relative mt-10 h-28 w-28">
//             <div className="absolute inset-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl" />
//             <div className="absolute inset-4 rounded-full bg-gradient-to-b from-[#9b6dff] to-[#6f3ef6]" />
//             <div className="absolute left-1/2 top-full h-16 w-px -translate-x-1/2 bg-gradient-to-b from-white/80 to-transparent" />
//           </div>

//           <div className="pointer-events-none absolute left-1/2 top-[250px] h-[540px] w-[1600px] -translate-x-1/2 rounded-[999px] border-t border-[#8b5cf6]/50 bg-[radial-gradient(ellipse_at_top,rgba(148,77,255,0.25),transparent_60%)] shadow-[0_-80px_160px_rgba(127,63,255,0.25)_inset]" />

//           <div className="relative z-10 mt-auto w-full px-6 pb-10 lg:px-20">
//             <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-white/80 md:justify-between">
//               {logos.map((logo) => (
//                 <div key={logo} className="text-sm font-medium tracking-wide">
//                   {logo}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stats() {
//   return (
//     <section className="relative z-10 -mt-10 px-4 md:px-8 lg:px-0">
//       <div className="mx-auto grid max-w-[1300px] gap-0 rounded-3xl border border-white/10 md:grid-cols-2">
//         <GlassCard className="rounded-b-none rounded-t-3xl border-b border-white/10 md:rounded-l-3xl md:rounded-r-none md:rounded-b-3xl">
//           <div className="flex h-full flex-col gap-6 p-6 md:flex-row md:items-center">
//             <div className="grid h-[184px] w-[188px] place-items-center rounded-2xl bg-gradient-to-br from-[#7b49ff] to-transparent">
//               <Shield className="h-16 w-16 text-white" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-3xl font-medium text-white md:text-4xl">
//                 Give You 100% Security
//               </h3>
//               <p className="mt-4 text-lg text-white/70">
//                 Give You 100% Security. Give You 100% Security
//               </p>
//             </div>
//           </div>
//         </GlassCard>

//         <GlassCard className="rounded-t-none md:rounded-r-3xl md:rounded-l-none">
//           <div className="flex h-full flex-col gap-6 p-6 md:flex-row md:items-center">
//             <div className="text-6xl font-medium text-white md:text-[90px]">
//               90%
//             </div>
//             <div className="flex-1">
//               <h3 className="text-3xl font-medium text-white md:text-4xl">
//                 Give You 100% Security
//               </h3>
//               <p className="mt-4 text-lg text-white/70">
//                 Give You 100% Security. Give You 100% Security
//               </p>
//             </div>
//           </div>
//         </GlassCard>
//       </div>
//     </section>
//   );
// }

// function Benefits() {
//   return (
//     <section id="benefits" className="relative px-4 py-24 md:px-8 lg:px-0">
//       <div className="mx-auto max-w-[1300px] text-center">
//         <SectionBadge text="Sylphic" />

//         <h2 className="mx-auto mt-10 max-w-5xl bg-gradient-to-b from-white to-white/30 bg-clip-text text-4xl font-medium leading-tight text-transparent md:text-6xl">
//           Innovative Problem-Solving for Your Business Needs
//         </h2>

//         <div className="relative mt-20 hidden h-[420px] md:block">
//           <div className="absolute left-1/2 top-0 h-[220px] w-px -translate-x-1/2 bg-white/20" />
//           <div className="absolute left-1/2 top-[220px] h-px w-[72%] -translate-x-1/2 bg-white/20" />

//           <div className="absolute left-1/2 top-[150px] z-10 grid h-28 w-28 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-b from-[#8547f6] to-[#bc98ff] shadow-[0_0_50px_rgba(133,71,246,0.45)]">
//             <Cpu className="h-12 w-12 text-white" />
//           </div>

//           <div className="absolute left-0 top-[260px] w-[375px]">
//             <GlassCard className="p-10 text-center">
//               <div className="mb-8 flex items-center justify-center">
//                 <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-gradient-to-b from-[#8547f6] to-[#bc98ff]">
//                   <Lightbulb className="h-8 w-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-3xl text-white">
//                 Developing tailored solutions
//               </h3>
//               <p className="mt-5 text-white/70">
//                 Next, our team of experts develops tailored solutions.
//               </p>
//             </GlassCard>
//           </div>

//           <div className="absolute right-0 top-[260px] w-[375px]">
//             <GlassCard className="p-10 text-center">
//               <div className="mb-8 flex items-center justify-center">
//                 <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-gradient-to-b from-[#8547f6] to-[#bc98ff]">
//                   <Sparkles className="h-8 w-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-3xl text-white">Implementing Technology</h3>
//               <p className="mt-5 text-white/70">
//                 We leverage cutting-edge technology implement seamlessly.
//               </p>
//             </GlassCard>
//           </div>

//           <div className="absolute left-1/2 top-[230px] w-[377px] -translate-x-1/2 translate-y-[150px]">
//             <GlassCard className="p-10 text-center">
//               <div className="mb-8 flex items-center justify-center">
//                 <div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-gradient-to-b from-[#8547f6] to-[#bc98ff]">
//                   <Rocket className="h-8 w-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-3xl text-white">
//                 Understanding Your Business Goals
//               </h3>
//               <p className="mt-5 text-white/70">
//                 We start by gaining a deep understanding of your business goals.
//                 This helps us create tailored solutions that align perfectly
//                 with your goals.
//               </p>
//             </GlassCard>
//           </div>
//         </div>

//         <div className="mt-16 grid gap-6 md:hidden">
//           {[
//             {
//               icon: <Lightbulb className="h-8 w-8 text-white" />,
//               title: "Developing tailored solutions",
//               desc: "Next, our team of experts develops tailored solutions.",
//             },
//             {
//               icon: <Rocket className="h-8 w-8 text-white" />,
//               title: "Understanding Your Business Goals",
//               desc: "We start by gaining a deep understanding of your business goals.",
//             },
//             {
//               icon: <Sparkles className="h-8 w-8 text-white" />,
//               title: "Implementing Technology",
//               desc: "We leverage cutting-edge technology implement seamlessly.",
//             },
//           ].map((item) => (
//             <GlassCard key={item.title} className="p-8 text-center">
//               <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-b from-[#8547f6] to-[#bc98ff]">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl text-white">{item.title}</h3>
//               <p className="mt-4 text-white/70">{item.desc}</p>
//             </GlassCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   return (
//     <section className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-0">
//       <div className="absolute inset-0 opacity-60">
//         <div className="absolute left-0 right-0 top-1/2 h-48 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(133,71,246,0.18),transparent_60%)] blur-3xl" />
//       </div>

//       <div className="mx-auto max-w-[1300px] text-center">
//         <SectionBadge text="Sylphic" />
//         <h2 className="mx-auto mt-10 max-w-4xl bg-gradient-to-b from-white to-white/30 bg-clip-text text-4xl font-medium leading-tight text-transparent md:text-6xl">
//           Comprehensive Service Offerings
//         </h2>

//         <div className="relative mt-20 flex items-center justify-center gap-4">
//           <button className="hidden h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl lg:flex">
//             <ArrowRight className="h-10 w-10 rotate-180" />
//           </button>

//           <div className="grid w-full gap-8 md:grid-cols-3">
//             {serviceCards.map((card) => (
//               <div
//                 key={card.title}
//                 className={`transition duration-300 ${card.rotate} ${
//                   card.active
//                     ? "scale-100 opacity-100"
//                     : "scale-[0.96] opacity-80"
//                 }`}
//               >
//                 <GlassCard className="relative h-full min-h-[379px] overflow-hidden p-7 text-left">
//                   <div className="absolute -bottom-10 right-[-20px] h-44 w-44 rounded-full bg-[#8a4ef6]/40 blur-2xl" />
//                   <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-gradient-to-t from-[#77a7ff]/40 to-transparent" />

//                   <h3 className="relative z-10 max-w-[260px] text-3xl text-white">
//                     {card.title}
//                   </h3>
//                   <p className="relative z-10 mt-6 max-w-[190px] text-white/75">
//                     {card.desc}
//                   </p>

//                   <button className="relative z-10 mt-10 inline-flex items-center gap-5 rounded-full border border-white px-4 py-2 text-white">
//                     Learn more
//                     <span className="h-px w-10 bg-white" />
//                   </button>
//                 </GlassCard>
//               </div>
//             ))}
//           </div>

//           <button className="hidden h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:flex">
//             <ArrowRight className="h-10 w-10" />
//           </button>
//         </div>

//         <div className="mt-16 flex items-center justify-center gap-1">
//           <div className="h-[5px] w-10 rounded-full bg-white/20" />
//           <div className="h-[5px] w-24 rounded-full bg-white" />
//           <div className="h-[5px] w-10 rounded-full bg-white/20" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Community() {
//   const miniCards = [
//     {
//       text: "Highly Recommended!",
//       name: "Carlos Sainz",
//       className: "left-[10%] top-[18%]",
//     },
//     {
//       text: "The results are outstanding!",
//       name: "Gracie Abrams",
//       className: "right-[18%] top-[10%]",
//     },
//     {
//       text: "Nice work, love it! 🔥",
//       name: "Byeon Wo Soek",
//       className: "right-[4%] top-[40%]",
//     },
//     {
//       text: "That was amazing! Greatjob!",
//       name: "Louis Patridge",
//       className: "left-[2%] top-[44%]",
//     },
//   ];

//   return (
//     <section className="relative px-4 py-28 md:px-8 lg:px-0">
//       <div className="mx-auto max-w-[1225px]">
//         <div className="relative hidden h-[820px] items-center justify-center overflow-hidden md:flex">
//           <div className="absolute inset-0 rounded-full border border-[#534081]/40" />
//           <div className="absolute inset-[9%] rounded-full border border-[#534081]/40" />
//           <div className="absolute inset-[19%] rounded-full border border-[#534081]/40" />

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(133,71,246,0.16),transparent_60%)]" />

//           {miniCards.map((item) => (
//             <div
//               key={item.text}
//               className={`absolute ${item.className} rounded-full border border-[#534081] bg-[linear-gradient(90deg,rgba(255,255,255,0.18),rgba(133,71,246,0.08))] px-3 py-3 backdrop-blur-xl`}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="h-11 w-11 rounded-full bg-white/20" />
//                 <div>
//                   <p className="text-sm font-bold text-white">{item.text}</p>
//                   <p className="text-sm text-white/70">{item.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="relative z-10 text-center">
//             <h2 className="text-6xl font-medium text-white">
//               Join Our Community
//             </h2>
//             <div className="mt-8 flex justify-center">
//               <GlowButton>Join Us</GlowButton>
//             </div>
//           </div>
//         </div>

//         <div className="md:hidden">
//           <div className="rounded-[40px] border border-[#534081]/40 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl">
//             <h2 className="text-4xl font-medium text-white">
//               Join Our Community
//             </h2>
//             <div className="mt-8 flex justify-center">
//               <GlowButton>Join Us</GlowButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   return (
//     <section
//       id="reviews"
//       className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-0"
//     >
//       <div className="absolute left-1/2 top-0 h-40 w-[1400px] -translate-x-1/2 bg-[#070322] blur-[75px]" />
//       <div className="absolute bottom-0 left-1/2 h-40 w-[1400px] -translate-x-1/2 bg-[#070322] blur-[75px]" />

//       <div className="mx-auto max-w-[1440px]">
//         <div className="text-center">
//           <SectionBadge text="Sylphic" />
//           <h2 className="mx-auto mt-10 max-w-3xl bg-gradient-to-b from-white to-white/30 bg-clip-text text-4xl font-medium text-transparent md:text-6xl">
//             Don’t Trust Us, Trust Their Voice
//           </h2>
//         </div>

//         <div className="mt-24 grid gap-5 xl:grid-cols-3">
//           {testimonials.map((item, index) => (
//             <GlassCard
//               key={`${item.author}-${index}`}
//               className={`p-10 text-center ${
//                 item.active ? "border-white bg-white/[0.07]" : "opacity-60"
//               }`}
//             >
//               <h3 className="text-4xl text-white">{item.title}</h3>
//               <p className="mt-5 text-lg text-white/75">{item.body}</p>
//               <div className="mt-8 border-t border-white/10 pt-5 text-3xl text-white">
//                 {item.author}
//               </div>
//             </GlassCard>
//           ))}
//         </div>

//         <div className="mt-16 flex items-center justify-center gap-1">
//           <div className="h-[5px] w-10 rounded-full bg-white/20" />
//           <div className="h-[5px] w-24 rounded-full bg-white" />
//           <div className="h-[5px] w-10 rounded-full bg-white/20" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="px-4 py-24 md:px-8 lg:px-0">
//       <div className="mx-auto max-w-[1300px]">
//         <div className="text-center">
//           <SectionBadge text="Sylphic" />
//           <h2 className="mx-auto mt-10 max-w-3xl bg-gradient-to-b from-white to-white/30 bg-clip-text text-4xl font-medium text-transparent md:text-6xl">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         <div className="mt-24 space-y-5">
//           {faqItems.map((item, index) => {
//             const open = openIndex === index;
//             return (
//               <div
//                 key={item.q}
//                 className={`rounded-3xl border ${
//                   open ? "border-white/50" : "border-white/10"
//                 } bg-[#070322] transition`}
//               >
//                 <button
//                   onClick={() => setOpenIndex(open ? -1 : index)}
//                   className="flex w-full items-start justify-between gap-6 p-8 text-left"
//                 >
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-medium text-white md:text-[32px]">
//                       {item.q}
//                     </h3>
//                     {open && (
//                       <p className="mt-8 text-lg leading-8 text-white/60">
//                         {item.a}
//                       </p>
//                     )}
//                   </div>

//                   <div className="pt-1 text-white">
//                     {open ? (
//                       <Minus className="h-6 w-6" />
//                     ) : (
//                       <Plus className="h-6 w-6" />
//                     )}
//                   </div>
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer id="contact" className="relative mt-20 overflow-hidden">
//       <div className="absolute inset-x-0 bottom-0 h-[360px] bg-[radial-gradient(ellipse_at_bottom,rgba(143,92,255,0.45),transparent_60%)]" />
//       <div className="absolute left-1/2 bottom-[-120px] h-[500px] w-[1800px] -translate-x-1/2 rounded-[999px] border-t border-[#8b5cf6]/35 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.18),transparent_65%)]" />

//       <div className="relative mx-auto max-w-[1300px] px-4 pb-16 pt-28 md:px-8 lg:px-0">
//         <div className="grid gap-14 md:grid-cols-[220px_260px_1fr]">
//           <div>
//             <div className="flex items-center gap-3">
//               <div className="grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-white/10 text-xs font-bold">
//                 S
//               </div>
//               <span className="text-2xl font-medium text-white">Sylphic</span>
//             </div>
//             <p className="mt-4 text-sm text-white/60">
//               we has the full types of potential for your start-up business.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-10 text-sm">
//             <div>
//               <h4 className="font-bold text-white">Quick Links</h4>
//               <div className="mt-6 space-y-3 text-white/60">
//                 <p>About Us</p>
//                 <p>Our Services</p>
//                 <p>Community</p>
//                 <p>Testimonials</p>
//                 <p>FAQ</p>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-white">Company</h4>
//               <div className="mt-6 space-y-3 text-white/60">
//                 <p>About Us</p>
//                 <p>Contact Us</p>
//                 <p>Career Tips</p>
//                 <p>Career</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="max-w-sm text-4xl font-semibold text-white">
//               <span className="bg-gradient-to-b from-white to-[#070322] bg-clip-text text-transparent">
//                 Join the Sylphic
//               </span>
//               <br />
//               Community
//             </h3>

//             <div className="mt-8 flex flex-col gap-4 rounded-full border border-[#77679f] px-5 py-2 md:flex-row md:items-center md:justify-between">
//               <div className="text-lg text-white">Enter Your Gmail</div>
//               <div>
//                 <GlowButton>Join Us</GlowButton>
//               </div>
//             </div>

//             <div className="mt-10 flex items-center gap-3">
//               {[Car].map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#070322] text-white">
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Benefits />
//       <Services />
//       <Community />
//       <Testimonials />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// }
