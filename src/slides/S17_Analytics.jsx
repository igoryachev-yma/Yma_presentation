import A, { slideLeft, slideRight } from '../components/A'

export default function S17Analytics() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Analytics</h2></A>
        <A d={2}><p className="section-subtitle">Clear visibility into why leads convert — or don't</p></A>

        <div className="feature-grid">
          <A v={slideLeft} d={3}>
            <div className="feature-block" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="card-icon card-icon-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                </svg>
              </div>
              <p className="feature-label feature-label-solution">Conversion by source</p>
              <p className="feature-text">Shows how different channels (organic, lead forms, campaigns, reactivation) contribute to bookings — helping identify the most effective sources.</p>
            </div>
          </A>
          <A v={slideRight} d={4}>
            <div className="feature-block" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="card-icon card-icon-amber">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <p className="feature-label feature-label-problem">Quality control analysis</p>
              <p className="feature-text">Explains why qualified leads did not convert (no response, price concerns, scheduling) and categorizes irrelevant traffic (spam, partnerships, non-service inquiries).</p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
