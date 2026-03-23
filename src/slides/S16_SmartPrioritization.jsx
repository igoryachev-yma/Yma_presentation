import A, { slideLeft, slideRight } from '../components/A'

export default function S16SmartPrioritization() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Smart Prioritization</h2></A>

        <div className="feature-grid">
          <A v={slideLeft} d={2}>
            <div className="feature-block">
              <p className="feature-label feature-label-problem">The problem</p>
              <p className="feature-text">Important conversations can be missed during the day, especially when there is a high volume of chats. Operators may overlook unanswered questions or urgent cases.</p>
            </div>
          </A>
          <A v={slideRight} d={3}>
            <div className="feature-block">
              <p className="feature-label feature-label-solution">How it works</p>
              <p className="feature-text">Smart Sorting runs during non-working hours. It reviews all conversations from the last 24 hours and prioritizes them based on context. In the morning, operators see <span className="hl-green">prioritized chats at the top</span>, each with an AI-generated summary explaining what happened and what action is needed.</p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
