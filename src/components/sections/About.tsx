"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { qualities, education } from "@/lib/data";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, defaultViewport } from "@/lib/animations";

const slideImages = [
  "/project02/image01.jpeg",
  "/project02/image03.jpeg",
  "/project02/image05.jpeg",
  "/project02/image07.jpeg",
  "/project02/image09.jpeg",
  "/project02/image11.jpeg",
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section-padding bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.25em] uppercase font-medium mb-4">
            <span className="w-8 h-0.5 bg-accent inline-block" />
            About Me
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Crafting Spaces
            <br />
            <span className="italic font-medium text-accent">That Tell Stories</span>
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Slideshow */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 rounded-2xl pointer-events-none z-0" />

            {/* Image carousel */}
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-dark/10">
              <AnimatePresence mode="sync">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slideImages[current]}
                    alt={`Thanushki Senarath — Design Work ${current + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    priority={current === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 rounded-full ${
                      i === current
                        ? "w-6 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 right-4 z-30 glass rounded-full px-3 py-1">
                <span className="text-dark text-xs font-medium tabular-nums">
                  {String(current + 1).padStart(2, "0")} / {String(slideImages.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl px-6 py-4 shadow-xl z-20"
            >
              <p className="font-playfair text-2xl font-bold text-dark">3+</p>
              <p className="text-dark-light text-xs tracking-wide">Years of Study</p>
            </motion.div>

            {/* Floating pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-8 glass rounded-full px-4 py-2 shadow-lg z-20"
            >
              <p className="text-accent text-sm font-medium">✦ Interior Architecture</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {/* Intro Text */}
            <p className="text-dark-light text-lg leading-relaxed mb-4">
              I am an Interior Architecture undergraduate with a passion for research-driven
              conceptual design. My work explores the intersection of cultural heritage,
              natural environments, and contemporary aesthetics.
            </p>
            <p className="text-dark-light text-base leading-relaxed mb-10">
              Inspired by the rich tapestry of traditional craftsmanship and organic patterns
              found in nature, I strive to create spaces that are both functionally intelligent
              and emotionally resonant — spaces that invite the inhabitant into a deeper
              relationship with their environment.
            </p>

            {/* Education */}
            <div className="mb-10">
              <h3 className="font-playfair text-xl font-semibold text-dark mb-5">Education</h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={defaultViewport}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    className="flex items-start gap-4 glass-beige rounded-xl p-4"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{edu.icon}</span>
                    <div>
                      <p className="font-semibold text-dark text-sm">{edu.institution}</p>
                      <p className="text-accent text-xs tracking-wide">{edu.location}</p>
                      <p className="text-dark-light text-xs mt-1">{edu.degree}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Qualities */}
            <div>
              <h3 className="font-playfair text-xl font-semibold text-dark mb-5">
                Personal Qualities
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="flex flex-wrap gap-3"
              >
                {qualities.map(({ label, icon }) => (
                  <motion.div
                    key={label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 10 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                      },
                    }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex items-center gap-2 glass rounded-full px-4 py-2 cursor-default shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="text-base">{icon}</span>
                    <span className="text-dark text-sm font-medium">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
