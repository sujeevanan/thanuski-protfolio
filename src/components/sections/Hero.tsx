"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const heroImages = [
  { src: "/project01/image03.jpeg", alt: "Interior design – warm living space" },
  { src: "/project02/image02.jpeg", alt: "Interior design – elegant bedroom" },
  { src: "/project03/image05.jpeg", alt: "Interior design – modern corridor" },
  { src: "/project04/image03.jpeg", alt: "Interior design – contemporary lounge" },
];

const stats = [
  { value: "6+", label: "Projects", sub: "Completed" },
  { value: "3+", label: "Years", sub: "of Study" },
  { value: "2", label: "Universities", sub: "Attended" },
];

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easing } },
};

const statVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easing, delay: 1.2 + i * 0.12 },
  }),
};

function FloatingShape({
  className,
  duration = 5,
  delay = 0,
}: {
  className?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay, repeatType: "loop" }}
      className={className}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const springBgY = useSpring(bgY, { stiffness: 80, damping: 20 });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax Slideshow Background */}
      <motion.div
        style={{ y: springBgY, scale: bgScale }}
        className="absolute inset-0 origin-center"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.6, ease: easing }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              className="object-cover object-center"
              priority={currentIndex === 0}
              quality={90}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Floating Decorative Elements */}
      <FloatingShape duration={5} delay={0} className="absolute top-1/4 right-16 w-20 h-20 border border-white/20 rounded-full hidden lg:block" />
      <FloatingShape duration={6.2} delay={1.2} className="absolute top-1/3 right-32 w-10 h-10 border border-accent/30 rounded-full hidden lg:block" />
      <FloatingShape duration={5.6} delay={0.6} className="absolute bottom-1/3 left-20 w-14 h-14 border border-white/15 rounded-full hidden lg:block" />
      <FloatingShape duration={6.8} delay={1.8} className="absolute top-1/2 left-12 w-6 h-6 bg-accent/20 rounded-full hidden lg:block" />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-8 flex flex-col justify-between min-h-screen"
      >
        {/* Top spacer */}
        <div />

        {/* Hero Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.0] tracking-tight mb-6"
          >
            <span className="text-white">Thanushki</span>
            <br />
            <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-white/90 to-white/70">
              Senarath
            </span>
          </motion.h1>

          {/* Divider with title */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent-light text-base sm:text-lg font-medium tracking-widest uppercase">
              Interior Architecture Undergraduate
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg mb-10 font-light"
          >
            Research-driven conceptual designer inspired by{" "}
            <span className="text-white font-normal italic">nature, culture,</span> and tradition —
            blended with contemporary design.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => scrollTo("projects")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 bg-accent text-white rounded-full font-medium tracking-wide hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/30 cursor-pointer shimmer-btn flex items-center gap-2"
            >
              Explore Work
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>

            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border border-white/40 text-white rounded-full font-medium tracking-wide hover:bg-white/10 hover:border-white/70 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Row — Stats + Slide Indicators */}
        <div className="mt-16 mb-6 flex flex-col gap-6">

          {/* Stats Row */}
          <div className="flex items-stretch gap-4 flex-wrap">
            {stats.map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={statVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 min-w-[120px] relative group"
              >
                {/* Glass card */}
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md px-6 py-5 flex flex-col gap-1 hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                  {/* Top accent line */}
                  <div className="w-8 h-0.5 bg-accent rounded-full mb-2" />
                  <p className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-none">
                    {value}
                  </p>
                  <p className="text-white font-semibold text-sm tracking-wide mt-1">{label}</p>
                  <p className="text-white/45 text-xs tracking-widest uppercase">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative side card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easing, delay: 1.6 }}
              className="hidden lg:flex flex-1 min-w-[180px] rounded-2xl border border-accent/30 bg-accent/10 backdrop-blur-md px-6 py-5 flex-col justify-between"
            >
              <div className="w-8 h-0.5 bg-accent/60 rounded-full mb-3" />
              <p className="text-white/80 text-sm leading-relaxed font-light italic">
                &ldquo;Designing spaces that breathe — where tradition meets tomorrow.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-6 h-px bg-accent/50" />
                <span className="text-accent-light text-xs tracking-widest uppercase">Thanushki</span>
              </div>
            </motion.div>
          </div>

          {/* Slide indicators + scroll hint row */}
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="cursor-pointer"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <motion.div
                    animate={{
                      width: i === currentIndex ? 28 : 8,
                      backgroundColor:
                        i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-[3px] rounded-full"
                  />
                </button>
              ))}
            </div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollTo("about")}
            >
              <span className="text-white/40 text-xs tracking-[0.2em] uppercase hidden sm:block">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5"
              >
                <div className="w-0.5 h-1.5 bg-white/60 rounded-full" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
