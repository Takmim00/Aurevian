"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

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
    value: "+880 1581-495658",
    href: "tel:+8801581495658",
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
      className="group flex items-center justify-between rounded-[22px] border border-[#1f2f57] bg-[#0b1224]/72 px-5 py-3 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_30px_rgba(80,120,255,0.05)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#29406f] bg-[#0f1a33] text-[#dbe7ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-sm text-[#8ea4c9]">{item.label}</p>
          <p className="mt-1 text-[16px] font-medium tracking-[-0.02em] text-[#f4f8ff] sm:text-[17px]">
            {item.value}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="text-[#8ea4c9] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#dbe7ff]"
      />
    </motion.a>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", text: "Thank you! We'll get back to you soon." });
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again later." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-4 py-10 md:py-16 text-white md:px-8 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-20 h-64 w-64 rounded-full bg-[#8fb4ff]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-[#6c96ff]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-400">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-[#1b2848] bg-[linear-gradient(180deg,#0b1426_0%,#09111f_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(120,160,255,0.03)] sm:p-8 lg:p-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1f2f57] bg-[#0b1224] px-5 py-2 text-xl text-[#dbe7ff] shadow-[inset_1px_1px_2px_rgba(133,165,255,0.16),0_0_0_1px_rgba(70,110,210,0.08)]">
              <span className="opacity-80 text-[#8fb4ff]">⌘</span>
              <span className=" text-[#8fb4ff]">Contact Us</span>
            </div>

            <h2 className="max-w-120 text-[40px] leading-none tracking-[-0.05em] text-[#f4f8ff] sm:text-[52px] md:text-[60px] lg:text-[68px]">
              <span className="mr-2 font-serif italic text-[#dce8ff]">
                Let&rsquo;s
              </span>
              <span className="font-light text-[#f4f8ff]">
                Build Something Great
              </span>
            </h2>

            <p className="mt-5 max-w-115 text-sm leading-[1.75] text-[#9fb0d1] md:text-[15px]">
              Tell us about your idea, product, or redesign goals. We&rsquo;ll help
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
            className="rounded-[30px] border border-[#1b2848] bg-[#0b1224]/58 p-5 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_40px_rgba(80,120,255,0.06)] sm:p-7 lg:p-8"
          >
            <div className="rounded-[24px] border border-[#1f2f57] bg-[#09111f]/85 p-5 sm:p-6 lg:p-7">
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <div className="col-span-2">
                  <label className="mb-2 block text-sm text-[#8ea4c9]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John calsans"
                    className="h-13 w-full rounded-2xl border border-[#22345b] bg-[#0f1a33] px-4 text-[#f4f8ff] outline-none transition placeholder:text-[#6f86ad] focus:border-[#4b6fb8] focus:bg-[#13203d]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="mb-2 block text-sm text-[#8ea4c9]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="h-13 w-full rounded-2xl border border-[#22345b] bg-[#0f1a33] px-4 text-[#f4f8ff] outline-none transition placeholder:text-[#6f86ad] focus:border-[#4b6fb8] focus:bg-[#13203d]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="mb-2 block text-sm text-[#8ea4c9]">
                    Project Type
                  </label>
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    placeholder="Website, SaaS, redesign, AI product..."
                    className="h-13 w-full rounded-2xl border border-[#22345b] bg-[#0f1a33] px-4 text-[#f4f8ff] outline-none transition placeholder:text-[#6f86ad] focus:border-[#4b6fb8] focus:bg-[#13203d]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="mb-2 block text-sm text-[#8ea4c9]">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="8"
                    placeholder="Share your goals, features, timeline, and anything important about the project..."
                    className="w-full rounded-[22px] border border-[#22345b] bg-[#0f1a33] px-4 py-4 text-[#f4f8ff] outline-none transition placeholder:text-[#6f86ad] focus:border-[#4b6fb8] focus:bg-[#13203d]"
                  />
                </div>

                <div className="sm:col-span-2">
                  {status.text && (
                    <div
                      className={`mb-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "bg-green-900/30 text-green-300"
                          : "bg-red-900/30 text-red-300"
                      }`}
                    >
                      {status.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                      {status.text}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={sending}
                    className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#89aef7]/20 bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] px-6 text-sm font-medium text-[#08111f] shadow-[0_10px_30px_rgba(143,180,255,0.18)] transition disabled:opacity-60"
                  >
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_65%)] opacity-60" />
                    <span className="relative z-10 flex items-center gap-2">
                      {sending ? (
                        <>
                          <Loader2 size={17} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ArrowUpRight
                            size={17}
                            className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </>
                      )}
                    </span>
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
