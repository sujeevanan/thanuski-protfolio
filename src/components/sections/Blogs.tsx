"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/animations";

export default function Blogs() {
  return (
    <section id="blogs" className="section-padding bg-grey-light">
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
            Thoughts & Writing
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Design
            <span className="italic font-medium text-accent"> Journal</span>
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group glass rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-shadow duration-400 cursor-pointer flex flex-col"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                  />
                </motion.div>

                {/* Top gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark/5 to-dark/30" />

                {/* Category tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-accent text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
                  {post.category}
                </span>

                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-dark-light text-xs">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-dark-light/40" />
                  <span className="text-dark-light text-xs">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-semibold text-dark mb-3 leading-snug group-hover:text-accent transition-colors duration-300 flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-dark-light text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-accent font-medium text-sm group/link mt-auto">
                  <span>Read More</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
