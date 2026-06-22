"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = {
  Pages: ["Home", "Services", "About", "Projects"],
  Company: ["FAQ", "Privacy Policy", "Terms"],
};

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/aurevian.agency", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/aurevian_00/", label: "Instagram" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/aurevian-agency", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] px-4 pb-8 pt-2 text-white md:px-8 lg:px-10 xl:px-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-10 h-56 w-56 rounded-full bg-[#8fb4ff]/8 blur-[110px]" />
        <div className="absolute bottom-0 right-[10%] h-64 w-64 rounded-full bg-[#6c96ff]/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-400">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[34px] border border-[#1b2848] bg-[#0b1224]/60 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_40px_rgba(80,120,255,0.06)]"
        >
          <div className="grid gap-8 border-b border-[#1f2f57] px-5 py-8 sm:px-7 sm:py-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr] lg:px-10 lg:py-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Image
                  src="/aurevian.webp"
                  alt="Aurevian"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-2xl font-medium tracking-[-0.04em] text-[#f4f8ff]">
                  Aurevian
                </span>
              </div>

              <p className="max-w-95 text-sm leading-[1.8] text-[#9fb0d1] md:text-[15px]">
                Engineering intelligent products with modern design, smooth user
                experiences, and scalable development for the next era.
              </p>

              <motion.a
                href="mailto:hello@aurevian.agency"
                whileHover={{ x: 4 }}
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#dbe7ff] transition hover:text-[#8fb4ff]"
              >
                Contact Us <ArrowUpRight size={16} />
              </motion.a>
            </div>

            {Object.entries(links).map(([title, items], groupIndex) => (
              <div key={title}>
                <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-[#8ea4c9]">
                  {title}
                </h3>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: groupIndex * 0.06 + index * 0.04,
                      }}
                      whileHover={{ x: 4 }}
                      className="block text-[15px] text-[#b7c6e0] transition hover:text-[#f4f8ff]"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-[#8ea4c9]">
                Socials
              </h3>

                  <div className="mb-6 flex flex-wrap gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#29406f] bg-[#0f1a33] text-[#dbe7ff] transition hover:border-[#89aef7]/30 hover:bg-[linear-gradient(180deg,#e9f2ff_0%,#bfd4ff_100%)] hover:text-[#08111f]"
                    >
                      <Icon size={17} />
                    </motion.a>
                  );
                })}
              </div>

              <p className="text-sm leading-7 text-[#9fb0d1]">
                <a href="mailto:hello@aurevian.agency" className="hover:text-[#8fb4ff] transition-colors">hello@aurevian.agency</a>
                <br />
                Bangladesh · Worldwide Remote
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-5 py-4 text-sm text-[#8ea4c9] sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>© 2026 Aurevian. All rights reserved.</p>
            <p>Crafted with strategy, motion, and modern design.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}