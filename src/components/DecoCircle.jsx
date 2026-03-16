import { motion } from 'framer-motion'

const variants = {
  hidden: {
    scale: 0.6, opacity: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  visible: {
    scale: 1, opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function DecoCircle({ className = '' }) {
  return (
    <motion.div
      className={`bg-circle ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    />
  )
}
