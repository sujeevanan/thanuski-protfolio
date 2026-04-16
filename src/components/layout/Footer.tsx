"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-semibold mb-3">
              Thanushki<span className="text-accent-light">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Research-driven conceptual designer inspired by nature, culture, and tradition.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {["home", "about", "projects", "videos", "blogs", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-white/70 hover:text-accent-light transition-colors text-sm capitalize cursor-pointer"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-light transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-light transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-light transition-colors text-sm"
              >
                Behance
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Thanushki Senarath. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Interior Architecture Undergraduate · Limkokwing University Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
