import A from '../components/A'

export default function S10WhatsApp() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Challenge</p></A>
        <A d={1}><h2>"We're not switching our&nbsp;WhatsApp"</h2></A>

        <A d={2}>
          <p className="story-text">
            Many clinics had already built their workflows around WhatsApp Business — familiar interface, existing contacts, third-party integrations in place. Asking them to migrate meant a new UI, retraining the team, and breaking what already worked.
          </p>
        </A>

        <A d={3}>
          <div className="wa-bridge">
            <div className="wa-bridge-box">
              <p className="wa-bridge-title">WhatsApp Business</p>
              <ul className="wa-bridge-list">
                <li>Familiar UI</li>
                <li>Existing flow</li>
                <li>Team habits</li>
              </ul>
            </div>
            <div className="wa-bridge-connector">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path d="M4 12h40M38 6l6 6-6 6M10 6L4 12l6 6" stroke="var(--gray-300)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="wa-bridge-label">bridge</span>
            </div>
            <div className="wa-bridge-box wa-bridge-box-yma">
              <p className="wa-bridge-title">Yma</p>
              <ul className="wa-bridge-list">
                <li>AI replies</li>
                <li>Follow-ups</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </A>

        <A d={4}>
          <div className="lesson-card">
            <p className="lesson-label">Lesson learned</p>
            <p className="lesson-text">AI adoption fails when it asks clinics to abandon the tools their teams already rely on.</p>
          </div>
        </A>
      </div>
    </section>
  )
}
