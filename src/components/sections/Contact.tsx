"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, defaultViewport } from "@/lib/animations";

type FormStatus = "idle" | "loading" | "success" | "error";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "Connect on LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    label: "Follow on Instagram",
  },
  {
    name: "Behance",
    href: "https://behance.net",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.973 13.307c0 .405.025.808.056 1.13h5.504c-.044-1.252-.562-2.318-2.667-2.318-1.972 0-2.749.861-2.893 1.188zM8 1H0v17.999h8c3.359 0 5.647-1.47 5.647-5.068 0-2.114-1.215-3.427-2.788-3.977C12.3 9.45 13.1 8.35 13.1 6.673 13.1 3.28 10.5 1 8 1zm-.19 6.998H2.999V4.999H7.81c1.239 0 2.192.773 2.192 1.5 0 .728-.953 1.499-2.192 1.499zM8.38 11.997H3V9H8.38c1.415 0 2.623.743 2.623 1.499 0 .756-1.208 1.498-2.623 1.498z" />
      </svg>
    ),
    label: "View on Behance",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission — wire up to your backend or Formspree
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClasses = (name: string) =>
    `w-full bg-white/60 border rounded-xl px-5 py-3.5 text-dark text-sm outline-none transition-all duration-300 placeholder:text-dark-light/50 ${
      focused === name
        ? "border-accent shadow-sm shadow-accent/20 bg-white"
        : "border-beige-dark hover:border-accent/40"
    }`;

  return (
    <section id="contact" className="section-padding bg-portfolio-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-beige rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-earthy-green/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.25em] uppercase font-medium mb-4">
            <span className="w-8 h-0.5 bg-accent inline-block" />
            Get In Touch
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Let&apos;s Create
            <span className="italic font-medium text-accent"> Together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5 shadow-sm">
              <h3 className="font-playfair text-2xl font-semibold text-dark mb-6">
                Send a Message
              </h3>

              {/* Name */}
              <div>
                <label className="block text-dark text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Enter your name"
                  required
                  className={inputClasses("name")}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-dark text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  required
                  className={inputClasses("email")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-dark text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className={`${inputClasses("message")} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={status === "idle" ? { scale: 1.02, y: -1 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="w-full py-4 bg-accent text-white rounded-xl font-medium tracking-wide hover:bg-accent-dark transition-colors duration-300 disabled:opacity-70 relative overflow-hidden cursor-pointer shimmer-btn"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Send Message →
                    </motion.span>
                  )}
                  {status === "loading" && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                      />
                      Sending...
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      ✓ Message Sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-earthy-green text-sm"
                >
                  Thank you! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-10"
          >
            {/* Intro text */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-dark mb-4">
                Open to Opportunities
              </h3>
              <p className="text-dark-light leading-relaxed mb-4">
                Whether you&apos;re looking to collaborate on an interior design project,
                seeking a passionate design intern, or simply want to connect — I&apos;d
                love to hear from you.
              </p>
              <p className="text-dark-light leading-relaxed">
                My work is driven by curiosity, research, and a deep love for the spaces
                we inhabit. Let&apos;s create something meaningful together.
              </p>
            </div>

            {/* Contact details */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-2xl flex-shrink-0">✉</span>
                <div>
                  <p className="text-sm font-medium text-dark mb-0.5">Email</p>
                  <p className="text-dark-light text-sm">thanushki@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <p className="text-sm font-medium text-dark mb-0.5">Location</p>
                  <p className="text-dark-light text-sm">Kuala Lumpur, Malaysia · Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-dark tracking-widest uppercase mb-5">
                Connect With Me
              </p>
              <div className="flex flex-col gap-4">
                {socialLinks.map(({ name, href, icon, label }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center gap-4 glass rounded-xl p-4 hover:border-accent/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-accent/10 group-hover:bg-accent text-accent group-hover:text-white rounded-lg flex items-center justify-center transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <p className="font-medium text-dark text-sm">{name}</p>
                      <p className="text-dark-light text-xs">{label}</p>
                    </div>
                    <span className="ml-auto text-dark-light/40 group-hover:text-accent transition-colors">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
