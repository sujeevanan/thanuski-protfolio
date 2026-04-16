import type { Variants, Transition } from "framer-motion";

/* ─── Easing Presets ────────────────────────── */
export const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
export const easeInOut: [number, number, number, number] = [0.4, 0, 0.2, 1];
export const easeSpring = { type: "spring", stiffness: 120, damping: 20 };

/* ─── Base Transitions ──────────────────────── */
export const defaultTransition: Transition = {
  duration: 0.7,
  ease: easeOut,
};

export const slowTransition: Transition = {
  duration: 1.0,
  ease: easeOut,
};

export const fastTransition: Transition = {
  duration: 0.4,
  ease: easeOut,
};

/* ─── Fade Variants ─────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: defaultTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

/* ─── Scale Variants ────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/* ─── Stagger Container Variants ────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ─── Card Hover Variants ───────────────────── */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    transition: fastTransition,
  },
  hover: {
    scale: 1.02,
    y: -6,
    boxShadow: "0 20px 60px rgba(140,123,107,0.18)",
    transition: fastTransition,
  },
};

export const cardHoverStrong = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    transition: fastTransition,
  },
  hover: {
    scale: 1.04,
    y: -8,
    boxShadow: "0 30px 80px rgba(140,123,107,0.22)",
    transition: fastTransition,
  },
};

/* ─── Overlay Variants ──────────────────────── */
export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: easeOut } },
};

/* ─── Modal Variants ────────────────────────── */
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.25, ease: easeOut },
  },
};

/* ─── Text Character Variants ───────────────── */
export const charReveal: Variants = {
  hidden: { opacity: 0, y: 100, skewY: 7 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/* ─── Viewport Config ───────────────────────── */
export const defaultViewport = { once: true, margin: "-80px" };
export const earlyViewport = { once: true, margin: "-40px" };
