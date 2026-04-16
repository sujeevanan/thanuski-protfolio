"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, projectCategories, type ProjectCategory, type Project } from "@/lib/data";
import { fadeUp, modalBackdrop, modalContent, defaultViewport } from "@/lib/animations";

/* ─── Project Card ──────────────────────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const categoryColors: Record<string, string> = {
    "3D Visualization": "bg-amber-100 text-amber-700",
    "2D Drawings": "bg-blue-100 text-blue-700",
    Furniture: "bg-emerald-100 text-emerald-700",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-accent/12 transition-shadow duration-400"
      data-cursor-hover
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
          />
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-400" />

        {/* View Project CTA — appears on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={false}
            className="px-6 py-3 border-2 border-white text-white text-sm font-medium rounded-full backdrop-blur-sm hover:bg-white hover:text-dark transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            View Project
          </motion.div>
          <p className="text-white/60 text-xs mt-2">{project.imageCount} images</p>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent text-white text-xs px-2.5 py-1 rounded-full font-medium">
            Featured
          </div>
        )}

        {/* Image count */}
        <div className="absolute bottom-3 left-3 glass-dark text-white/80 text-xs px-2.5 py-1 rounded-full">
          {project.imageCount} {project.imageCount === 1 ? "image" : "images"}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
            categoryColors[project.category] || "bg-stone-100 text-stone-600"
          }`}
        >
          {project.category}
        </span>
        <h3 className="font-playfair text-lg font-semibold text-dark mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-dark-light text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Gallery Modal ─────────────────────────── */
function GalleryModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > activeIndex ? 1 : -1);
      setActiveIndex(Math.max(0, Math.min(idx, project.images.length - 1)));
    },
    [activeIndex, project.images.length]
  );

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
      scale: 0.94,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
      scale: 0.94,
    }),
  };

  return (
    <motion.div
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-dark/85 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-dark/80 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-dark transition-colors cursor-pointer text-sm"
        >
          ✕
        </button>

        {/* Main Image */}
        <div className="relative aspect-video bg-grey-light overflow-hidden flex-shrink-0">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[activeIndex]}
                alt={`${project.title} — image ${activeIndex + 1}`}
                fill
                className="object-cover"
                sizes="90vw"
                quality={90}
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass text-dark rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-lg"
              >
                ‹
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === project.images.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass text-dark rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-lg"
              >
                ›
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-dark text-white/90 text-sm px-4 py-1.5 rounded-full">
            {activeIndex + 1} / {project.images.length}
          </div>
        </div>

        {/* Thumbnail strip + info */}
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="mb-4">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              {project.category}
            </span>
            <h2 className="font-playfair text-2xl font-bold text-dark mt-1 mb-2">
              {project.title}
            </h2>
            <p className="text-dark-light text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    idx === activeIndex
                      ? "border-accent scale-105 shadow-md"
                      : "border-transparent hover:border-accent/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    quality={40}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Projects Section ──────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-3 text-accent text-sm tracking-[0.25em] uppercase font-medium mb-4">
            <span className="w-8 h-0.5 bg-accent inline-block" />
            Portfolio
            <span className="w-8 h-0.5 bg-accent inline-block" />
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
            Selected
            <span className="italic font-medium text-accent"> Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "glass text-dark-light hover:text-dark hover:border-accent/30"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-dark-light"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <GalleryModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
