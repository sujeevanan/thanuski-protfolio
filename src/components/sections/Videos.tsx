"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { videos } from "@/lib/data";
import { fadeUp, staggerContainer, modalBackdrop, modalContent, defaultViewport } from "@/lib/animations";

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<null | (typeof videos)[0]>(null);

  return (
    <section id="videos" className="section-padding bg-portfolio-bg">
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
            Videos
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Design in
            <span className="italic font-medium text-accent"> Motion</span>
          </h2>
        </motion.div>

        {/* Video Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveVideo(video)}
              className="group glass rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                  />
                </motion.div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative"
                  >
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 w-16 h-16 border-2 border-white/60 rounded-full"
                    />
                    {/* Play circle */}
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Duration badge */}
                <span className="absolute bottom-3 right-3 glass-dark text-white/90 text-xs px-2.5 py-1 rounded-full font-medium">
                  {video.duration}
                </span>

                {/* Category tag */}
                <span className="absolute top-3 left-3 bg-accent/90 text-white text-xs px-3 py-1 rounded-full tracking-wide">
                  {video.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-playfair text-lg font-semibold text-dark mb-2 group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-dark-light text-sm leading-relaxed">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close btn */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-dark/80 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-dark transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* YouTube embed */}
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="p-6">
                <span className="text-xs text-accent tracking-widest uppercase font-medium">
                  {activeVideo.category}
                </span>
                <h3 className="font-playfair text-2xl font-semibold text-dark mt-2 mb-2">
                  {activeVideo.title}
                </h3>
                <p className="text-dark-light text-sm">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
