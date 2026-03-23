import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ChatMockup({ messages = [], title = 'ChatGPT', compact = false, className = '', delay = 0, speed = 1, onMessageShown }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) {
      setShown(0)
    }
  }, [inView])

  useEffect(() => {
    if (!inView || shown >= messages.length) return
    const interval = shown === 0 ? ((1000 + delay) / speed) : (1200 / speed)
    const t = setTimeout(() => {
      setShown(s => {
        onMessageShown?.(s)
        return s + 1
      })
    }, interval)
    return () => clearTimeout(t)
  }, [inView, shown, messages, delay, speed])

  return (
    <div ref={ref} className={`chat-mockup${compact ? ' chat-compact' : ''} ${className}`}>
      <div className="chat-top-bar">
        <span className="chat-sparkle">✦</span>
        <span className="chat-title-text">{title}</span>
        <div className="chat-win-dots"><span /><span /><span /></div>
      </div>
      <div className="chat-body">
        {messages.map((msg, i) => {
          const visible = i < shown
          const content = typeof msg.content === 'string'
            ? msg.content.split('\n').map((line, j) => <p key={j}>{line || '\u00A0'}</p>)
            : msg.content
          return (
            <motion.div
              key={i}
              className={`chat-row chat-row-${msg.role}`}
              initial={{ opacity: 0, y: 6 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`chat-ava chat-ava-${msg.role}`}>
                {msg.role === 'user' ? '👤' : '✦'}
              </div>
              <div className="chat-content">{content}</div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
