import A, { slideLeft, slideRight } from '../components/A'

export default function S21SafeMode() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Safe Mode <span style={{ fontFamily: "'Geist', sans-serif", fontSize: 20, fontWeight: 400, color: '#1A1A1A' }}>(as the first step)</span></h2></A>

        <div className="feature-grid">
          <A v={slideLeft} d={2}>
            <div className="feature-block">
              <p className="feature-label feature-label-problem">The problem</p>
              <p className="feature-text">Operators spend time thinking about what to reply, especially with high chat volume. But replies are too complicated for AI, and you don't want AI to lead the chat instead of you.</p>
            </div>
          </A>
          <A v={slideRight} d={3}>
            <div className="feature-block">
              <p className="feature-label feature-label-solution">How it works</p>
              <p className="feature-text">AI generates ready-to-send replies for each conversation. The operator reviews, optionally edits, and sends in <span className="hl-green">one click</span>. With 100+ conversations per day, even a few minutes saved per reply adds up significantly. And you still review every AI reply instead of letting it work blindly.</p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
