import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import A from '../components/A'

const cards = [
  {
    icon: '🔑',
    title: 'First Advantage',
    detail: 'Detailed explanation of this advantage. Describe why it matters and what makes it unique.',
  },
  {
    icon: '⚡',
    title: 'Second Advantage',
    detail: 'Another compelling point with supporting details. Keep it concise but informative.',
  },
  {
    icon: '🛡️',
    title: 'Third Advantage',
    detail: 'Final key differentiator. Explain the value proposition clearly and directly.',
  },
]

export default function FlipSlide() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const [flipped, setFlipped] = useState(cards.map(() => false))

  useEffect(() => {
    if (!inView) {
      setFlipped(cards.map(() => false))
      return
    }
    const timers = cards.map((_, i) =>
      setTimeout(
        () => setFlipped(f => { const n = [...f]; n[i] = true; return n }),
        2000 + i * 800,
      )
    )
    return () => timers.forEach(clearTimeout)
  }, [inView])

  const toggle = (i) => {
    setFlipped(f => { const n = [...f]; n[i] = !n[i]; return n })
  }

  return (
    <section className="slide" ref={ref}>
      <div className="slide-inner">
        <A><p className="tag">Key Points</p></A>
        <A d={1}><h2>Flip Cards Heading</h2></A>

        <div className="flip-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`flip-card${flipped[i] ? ' flipped' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="flip-card-inner">
                <div className="flip-front">
                  <span className="flip-front-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <span className="flip-hint">click to reveal</span>
                </div>
                <div className="flip-back">
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                  <span className="flip-hint flip-hint-back">click to flip back</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
