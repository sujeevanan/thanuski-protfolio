"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { defaultViewport } from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface SectionRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getVariants = (direction: Direction) => {
  const initial = { opacity: 0 } as Record<string, number>;

  switch (direction) {
    case "up":
      initial.y = 60;
      break;
    case "down":
      initial.y = -40;
      break;
    case "left":
      initial.x = -60;
      break;
    case "right":
      initial.x = 60;
      break;
    case "scale":
      initial.scale = 0.85;
      break;
    case "none":
    default:
      break;
  }

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };
};

export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}: SectionRevealProps) {
  return (
    <motion.div
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section Wrapper ─────────────────────── */
interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export function StaggerWrapper({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0.1,
}: SectionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
