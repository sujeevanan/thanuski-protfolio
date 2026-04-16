"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* scroll state */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-white/90 shadow-sm border-b border-beige"
            : "bg-black/30 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo("home")}
              className={`font-playfair text-xl font-semibold tracking-wide cursor-pointer transition-colors duration-500 ${scrolled ? "text-dark" : "text-white"}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Thanushki<span className="text-accent">.</span>
            </motion.button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href;
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "text-accent"
                        : scrolled
                        ? "text-dark hover:text-accent"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium tracking-wide shadow-md hover:bg-accent-dark transition-colors duration-300 cursor-pointer shimmer-btn"
              >
                View Portfolio
              </motion.button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`block w-5 h-0.5 rounded-full origin-center ${scrolled ? "bg-dark" : "bg-white"}`}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block w-5 h-0.5 rounded-full ${scrolled ? "bg-dark" : "bg-white"}`}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`block w-5 h-0.5 rounded-full origin-center ${scrolled ? "bg-dark" : "bg-white"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden bg-white/96 backdrop-blur-xl border-t border-beige"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navLinks.map(({ href, label }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    onClick={() => scrollTo(href)}
                    className={`text-left py-3 px-2 text-base font-medium rounded-lg transition-colors cursor-pointer ${
                      activeSection === href
                        ? "text-accent bg-beige/50"
                        : "text-dark hover:text-accent hover:bg-beige/30"
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => scrollTo("projects")}
                  className="mt-3 py-3 bg-accent text-white rounded-full font-medium text-center cursor-pointer"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
