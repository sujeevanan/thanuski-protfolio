"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { designInterests } from "@/lib/data";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function DesignInterests() {
  return (
    <section className="section-padding bg-grey-light relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-beige rounded-full blur-[120px] opacity-40 pointer-events-none" />

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
            Design Interests
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Areas of
            <span className="italic font-medium text-accent"> Focus</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {designInterests.map((interest, i) => (
            <motion.div
              key={interest.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: i % 2 === 0 ? 40 : 60,
                  x: 0,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className={`group relative glass rounded-2xl overflow-hidden cursor-default border border-white/80 hover:border-accent/30 transition-colors duration-300`}
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={75}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-3 left-4 text-2xl z-10"
                >
                  {interest.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-60`}
                />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-transparent" />

                {/* Title */}
                <h3 className="relative z-10 font-playfair text-lg font-semibold text-dark mb-2 group-hover:text-accent transition-colors duration-300 leading-snug">
                  {interest.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-dark-light text-sm leading-relaxed">
                  {interest.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-accent/40 transition-all duration-500 rounded-full" />

                {/* Corner dot */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent/60 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
