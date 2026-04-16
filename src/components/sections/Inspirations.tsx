"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { inspirations } from "@/lib/data";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function Inspirations() {
  return (
    <section className="section-padding bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
            Sources of Inspiration
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            What
            <span className="italic font-medium text-accent"> Inspires</span> Me
          </h2>
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {inspirations.map((item, i) => {
            /* Vary heights for masonry feel */
            const isLarge = i === 0 || i === 4;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.65,
                      delay: i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-default ${
                  isLarge ? "sm:col-span-1" : ""
                } ${i === 0 ? "lg:col-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "16/9" : "4/5" }}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: "inset 0 0 60px rgba(140,123,107,0.2)" }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Tag */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block self-start mb-3 px-3 py-1 glass-dark rounded-full text-white/80 text-xs tracking-widest uppercase"
                  >
                    {item.tag}
                  </motion.span>

                  <h3 className="font-playfair text-xl font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/80 text-sm">✦</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
