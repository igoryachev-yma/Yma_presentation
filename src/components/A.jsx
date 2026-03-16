import { motion } from 'framer-motion'

const EXIT = [0.22, 1, 0.36, 1]
const EXIT_DUR = 0.4

/**
 * Animation variants available for use with <A v={variantName}>.
 *
 *   blur      — fade in with blur + slight upward movement (default)
 *   scaleIn   — fade in with scale spring
 *   slideUp   — fade in sliding up
 *   slideLeft — fade in sliding from the left
 *   slideRight — fade in sliding from the right
 *   fadeIn    — simple opacity fade
 *
 * All variants replay on every scroll into view and animate out smoothly.
 */

export const blur = {
  hidden: {
    opacity: 0, filter: 'blur(10px)', y: 24,
    transition: { duration: EXIT_DUR, ease: EXIT },
  },
  visible: (d = 0) => ({
    opacity: 1, filter: 'blur(0px)', y: 0,
    transition: { delay: d * 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const scaleIn = {
  hidden: {
    opacity: 0, scale: 0.88,
    transition: { duration: EXIT_DUR, ease: EXIT },
  },
  visible: (d = 0) => ({
    opacity: 1, scale: 1,
    transition: { delay: d * 0.12, type: 'spring', stiffness: 180, damping: 22 },
  }),
}

export const slideUp = {
  hidden: {
    opacity: 0, y: 40,
    transition: { duration: EXIT_DUR, ease: EXIT },
  },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: d * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const slideLeft = {
  hidden: {
    opacity: 0, x: -36,
    transition: { duration: EXIT_DUR, ease: EXIT },
  },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: d * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const slideRight = {
  hidden: {
    opacity: 0, x: 36,
    transition: { duration: EXIT_DUR, ease: EXIT },
  },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { delay: d * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeIn = {
  hidden: {
    opacity: 0,
    transition: { duration: EXIT_DUR, ease: EXIT },
  },
  visible: (d = 0) => ({
    opacity: 1,
    transition: { delay: d * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function A({ children, v = blur, d = 0, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      custom={d}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
