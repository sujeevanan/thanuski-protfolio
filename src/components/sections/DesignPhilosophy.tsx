"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";

export default function DesignPhilosophy() {
  return (
    <section className="section-padding bg-grey-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-earthy-green blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.25em] uppercase font-medium mb-4">
            <span className="w-8 h-0.5 bg-accent inline-block" />
            Philosophy
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Design
            <span className="italic font-medium text-accent"> Philosophy</span>
          </h2>
        </motion.div>

        {/* Intro Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="font-playfair text-xl sm:text-2xl italic text-dark-light leading-relaxed">
            "My design philosophy is rooted in research-driven conceptual thinking — where
            every space becomes a bridge between cultural identity, environmental harmony,
            and the timeless dialogue between tradition and the contemporary."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
