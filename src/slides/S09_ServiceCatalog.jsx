import A, { slideLeft, slideRight } from '../components/A'

export default function S09ServiceCatalog() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Feature</p></A>
        <A d={1}><h2>Custom service catalog</h2></A>

        <div className="feature-grid feature-grid-equal">
          <A v={slideLeft} d={2}>
            <div className="feature-block">
              <p className="speaker-name">The problem it solves</p>
              <p className="feature-text">The bot uses general medical knowledge instead of the clinic's actual services, positioning, and offers.</p>
            </div>
          </A>
          <A v={slideRight} d={3}>
            <div className="feature-block">
              <p className="speaker-name">How it works</p>
              <p className="feature-text">Every clinic uploads structured service descriptions, expected results, and guidelines before going live. Clinic content always overrides general sources. The bot speaks from your materials — not from Wikipedia.</p>
            </div>
          </A>
        </div>

        <A d={4}>
          <div className="onboard-timeline">
            <div className="onboard-timeline-cards">
              <div className="onboard-item">
                <p className="onboard-title">Onboarding</p>
                <div className="onboard-chip">1 week</div>
                <p className="onboard-old">3 months</p>
              </div>
              <div className="onboard-arrow">
                <svg width="96" height="10" viewBox="0 0 96 10" fill="none">
                  <line x1="0" y1="5" x2="86" y2="5" stroke="#1A1A1A" strokeWidth="1" />
                  <path d="M86 0 L96 5 L86 10" fill="#1A1A1A" />
                </svg>
              </div>
              <div className="onboard-item">
                <p className="onboard-title">Architecture</p>
                <div className="onboard-chip">1 platform</div>
                <p className="onboard-old">Separate copies</p>
              </div>
              <div className="onboard-arrow">
                <svg width="96" height="10" viewBox="0 0 96 10" fill="none">
                  <line x1="0" y1="5" x2="86" y2="5" stroke="#1A1A1A" strokeWidth="1" />
                  <path d="M86 0 L96 5 L86 10" fill="#1A1A1A" />
                </svg>
              </div>
              <div className="onboard-item">
                <p className="onboard-title">AI bot</p>
                <div className="onboard-chip">Weeks of setup</div>
                <p className="onboard-old">Months of setup</p>
              </div>
            </div>
          </div>
        </A>
      </div>
    </section>
  )
}
