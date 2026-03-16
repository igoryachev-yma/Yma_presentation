import { useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

export default function Progress({ count }) {
  const { scrollYProgress } = useScroll()
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(Math.round(v * count), count - 1))
  })

  const scrollTo = (i) => {
    const slides = document.querySelectorAll('.slide')
    if (slides[i]) slides[i].scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="progress">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`progress-dot${i === active ? ' active' : ''}`}
          onClick={() => scrollTo(i)}
        />
      ))}
    </div>
  )
}
