import A, { slideLeft, slideRight } from '../components/A'

export default function S11WABACoexistence() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>WABA Coexistence Mode</h2></A>

        <div className="feature-grid">
          <A v={slideLeft} d={2}>
            <div className="feature-block">
              <p className="feature-label feature-label-problem">The problem</p>
              <p className="feature-text">Clinics don't want to give up their existing WhatsApp setup to get AI features.</p>
            </div>
          </A>
          <A v={slideRight} d={3}>
            <div className="feature-block">
              <p className="feature-label feature-label-solution">How it works</p>
              <p className="feature-text">Clinics stay on their familiar WhatsApp Business interface — nothing changes for the team. In parallel, they get full AI integration: broadcasts, reactivations, automated replies, analytics. <span className="hl-green">Same WhatsApp they know. All the AI on top.</span></p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
