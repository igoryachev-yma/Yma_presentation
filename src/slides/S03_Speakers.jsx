import A, { scaleIn } from '../components/A'

export default function S03Speakers() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Who we are</p></A>
        <A d={1}><h2>Speakers</h2></A>
        <A d={2}><p className="section-subtitle">Yma Health · AI-powered communication for your clinic</p></A>

        <div className="card-grid speaker-grid">
          <A v={scaleIn} d={3} className="speaker-col">
            <div className="card speaker-card">
              <img src="/boris.png" alt="Boris Semenov" className="speaker-photo" />
              <p className="speaker-name">Boris Semenov,<br />Head of Client Success</p>
              <p>5 years of experience in healthtech and AI implementation. Passionate about turning AI into reliable, real-world systems for clinical operations.</p>
            </div>
          </A>

          <A v={scaleIn} d={4} className="speaker-col">
            <div className="card speaker-card">
              <img src="/philip.png" alt="Philip Loginov" className="speaker-photo" />
              <p className="speaker-name">Philip Loginov,<br />Head of Business Development</p>
              <p>20+ years of experience in healthcare management and revenue growth. Built and scaled a multidisciplinary 300-doctor clinic from the ground up.</p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
