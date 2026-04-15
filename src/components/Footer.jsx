import { motion } from "framer-motion";
import { ArrowUpRight,  Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = {
  Pages: ["Home", "Services", "About", "Projects"],
  Company: ["FAQ", "Contact", "Privacy Policy", "Terms"],
};

const socials = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: Send, href: "#", label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-4 pb-8 pt-2 text-white md:px-8 lg:px-10 xl:px-14">
      <div className="mx-auto max-w-400">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[34px] border border-white/10 bg-white/3 backdrop-blur-2xl"
        >
          <div className="grid gap-8 border-b border-white/10 px-5 py-8 sm:px-7 sm:py-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr] lg:px-10 lg:py-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <img src="/aurevian.png" alt="Aurevian" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-2xl font-medium tracking-[-0.04em]">Aurevian</span>
              </div>

              <p className="max-w-95 text-sm leading-[1.8] text-white/52 md:text-[15px]">
                Engineering intelligent products with modern design, smooth user
                experiences, and scalable development for the next era.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/80"
              >
                Start a project <ArrowUpRight size={16} />
              </motion.a>
            </div>

            {Object.entries(links).map(([title, items], groupIndex) => (
              <div key={title}>
                <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-white/38">
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
                      transition={{ duration: 0.35, delay: groupIndex * 0.06 + index * 0.04 }}
                      whileHover={{ x: 4 }}
                      className="block text-[15px] text-white/62 transition hover:text-white"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-white/38">
                Socials
              </h3>

              <div className="mb-6 flex flex-wrap gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/75 transition hover:bg-white hover:text-black"
                    >
                      <Icon size={17} />
                    </motion.a>
                  );
                })}
              </div>

              <p className="text-sm leading-7 text-white/48">
                hello@aurevian.agency
                <br />
                Bangladesh · Worldwide Remote
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-5 py-4 text-sm text-white/38 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>© 2026 Aurevian. All rights reserved.</p>
            <p>Crafted with strategy, motion, and modern design.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
