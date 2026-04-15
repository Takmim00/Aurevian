import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aurevian.agency",
    href: "mailto:hello@aurevian.agency",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh · Available Worldwide",
    href: "#",
  },
];

function InfoCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-sm text-white/42">{item.label}</p>
          <p className="mt-1 text-[16px] font-medium tracking-[-0.02em] text-white sm:text-[17px]">
            {item.value}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="text-white/45 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
      />
    </motion.a>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-8 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-20 h-64 w-64 rounded-full bg-white/6 blur-[100px]" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-400">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-white/10 bg-[#070707] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1b1b1b] px-5 py-2 text-xl text-[#eeeeee] shadow-[inset_1.5px_1.5px_2px_rgba(255,255,255,0.15)]">
              <span className="opacity-80">⌘</span>
              <span>Contact Us</span>
            </div>

            <h2 className="max-w-120 text-[40px] leading-none tracking-[-0.05em] text-white sm:text-[52px] md:text-[60px] lg:text-[68px]">
              <span className="mr-2 font-serif italic">Let’s</span>
              <span className="font-light text-white/92">Build Something Great</span>
            </h2>

            <p className="mt-5 max-w-115 text-sm leading-[1.75] text-white/52 md:text-[15px]">
              Tell us about your idea, product, or redesign goals. We’ll help
              shape a clean, high-impact digital experience that feels modern
              and performs well.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => (
                <InfoCard key={item.label} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl sm:p-7 lg:p-8"
          >
            <div className="rounded-[24px] border border-white/10 bg-black/40 p-5 sm:p-6 lg:p-7">
              <form className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/55">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/4 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/6"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/55">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/4 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/6"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/55">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/4 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/6"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/55">Budget Range</label>
                  <input
                    type="text"
                    placeholder="$1k - $5k"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/4 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/6"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/55">Project Type</label>
                  <input
                    type="text"
                    placeholder="Website, SaaS, redesign, AI product..."
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/4 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/6"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/55">Tell us about your project</label>
                  <textarea
                    rows="8"
                    placeholder="Share your goals, features, timeline, and anything important about the project..."
                    className="w-full rounded-[22px] border border-white/10 bg-white/4 px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/6"
                  />
                </div>

                <div className="sm:col-span-2">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/12 bg-white px-6 text-sm font-medium text-black transition"
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_65%)] opacity-60" />
                    <span className="relative z-10">Send Inquiry</span>
                    <ArrowUpRight
                      size={17}
                      className="relative z-10 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
