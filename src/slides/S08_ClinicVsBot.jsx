import A from '../components/A'

export default function S08ClinicVsBot() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Clinic info vs bot</p></A>
        <A d={1}><h2>Case A: The bot that knew better</h2></A>
        <A d={2}><p className="section-subtitle">The wrong side has the voice</p></A>

        <A d={3}>
          <div className="scale-container">
            <div className="scale-beam">
              <div className="scale-pan scale-pan-left">
                <div className="scale-pan-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M9 8h1M14 8h1M9 12h1M14 12h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                  </svg>
                  <span>What the clinic says</span>
                </div>
              </div>

              <div className="scale-pan scale-pan-right">
                <div className="scale-pan-card scale-pan-card-loud">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2688B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                  <span>What the bot says</span>
                </div>
              </div>
            </div>

            <div className="scale-base">
              <div className="scale-triangle" />
            </div>
          </div>
        </A>

        <A d={4}>
          <div className="lesson-card">
            <p className="lesson-label">Lesson learned</p>
            <p className="lesson-text">AI needs to be trained on your specific services and patient expectations — not on what Wikipedia says about medicine.</p>
          </div>
        </A>
      </div>
    </section>
  )
}
