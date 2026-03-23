import A, { scaleIn } from '../components/A'

export default function S22Evolution() {
  return (
    <section className="slide">
      <div className="slide-inner text-center">
        <A><p className="tag">Journey</p></A>
        <A d={1}><h2>So how did we get here?</h2></A>
        <A d={2}><p className="section-subtitle">From Google Sheets to a platform</p></A>

        <div className="evo-grid">
          <A v={scaleIn} d={3}>
            <div className="evo-card evo-card-then">
              <p className="evo-label evo-label-then">Then</p>
              <ul className="evo-list">
                <li>700 services in a spreadsheet</li>
                <li>Bot was confused</li>
                <li>No control</li>
              </ul>
            </div>
          </A>
          <A v={scaleIn} d={4}>
            <div className="evo-card evo-card-now">
              <p className="evo-label evo-label-now">Now</p>
              <ul className="evo-list">
                <li>We built our own CMS</li>
                <li>Structured data — doctors, services, settings</li>
                <li>Internal tool for our team</li>
              </ul>
            </div>
          </A>
          <A v={scaleIn} d={5}>
            <div className="evo-card evo-card-future">
              <p className="evo-label evo-label-future">Future</p>
              <ul className="evo-list">
                <li>Clinics manage it themselves</li>
                <li>Update services, add doctors, change tone</li>
                <li>Self-serve platform</li>
              </ul>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
