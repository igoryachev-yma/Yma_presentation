import A from '../components/A'

export default function S20HelpfulTooFar() {
  return (
    <section className="slide">
      <div className="slide-inner text-center">
        <A><p className="tag">Case study</p></A>
        <A d={1}><h2>When "helpful" goes too far</h2></A>

        <A d={2}>
          <div className="flight-map">
            <div className="flight-map-path">
              <div className="flight-dot">
                <div className="flight-dot-ring" />
                <span className="flight-dot-label">Patient's city</span>
              </div>

              <div className="flight-arc">
                <svg viewBox="0 0 300 80" fill="none" className="flight-arc-svg">
                  <path d="M20 60 Q150 -10 280 60" stroke="var(--gray-300)" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                </svg>
                <div className="flight-plane">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gray-400)">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>
              </div>

              <div className="flight-dot">
                <div className="flight-dot-ring flight-dot-closed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <span className="flight-dot-label">Dubai clinic</span>
              </div>
            </div>

            <p className="flight-quote">"The bot said yes."</p>
          </div>
        </A>

        <A d={3}>
          <div className="lesson-card">
            <p className="lesson-label">Lesson learned</p>
            <p className="lesson-text">Every AI deployment needs a defined scope. The bot should know what it can handle — and what to pass on.</p>
          </div>
        </A>
      </div>
    </section>
  )
}
