import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

export default function ChatMockup({ messages = [], title = 'ChatGPT', compact = false, className = '', delay = 0, onMessageShown }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    if (!inView) {
      setShown(0)
      setTyping(false)
    }
  }, [inView])

  useEffect(() => {
    if (!inView || shown >= messages.length) return
    const msg = messages[shown]
    const baseDelay = shown === 0 ? (1000 + delay) : 1400
    let t1, t2
    if (msg.role === 'assistant') {
      t1 = setTimeout(() => {
        setTyping(true)
        const len = typeof msg.content === 'string' ? msg.content.length : 120
        t2 = setTimeout(() => {
          setTyping(false)
          setShown(s => {
            onMessageShown?.(s)
            return s + 1
          })
        }, 1200 + Math.min(len * 5, 1800))
      }, baseDelay)
    } else {
      t1 = setTimeout(() => setShown(s => {
        onMessageShown?.(s)
        return s + 1
      }), baseDelay)
    }
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [inView, shown, messages, delay])

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
            <div
              key={i}
              className={`chat-row chat-row-${msg.role} ${visible ? '' : 'chat-row-placeholder'}`}
            >
              <div className={`chat-ava chat-ava-${msg.role}`}>
                {msg.role === 'user' ? '👤' : '✦'}
              </div>
              <div className="chat-content">{content}</div>
            </div>
          )
        })}
        <AnimatePresence>
          {typing && (
            <motion.div
              className="chat-typing-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="chat-ava chat-ava-assistant">✦</div>
              <div className="chat-content">
                <div className="typing-dots"><span /><span /><span /></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
