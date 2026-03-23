import A, { scaleIn } from '../components/A'
import AnimatedNumber from '../components/AnimatedNumber'

export default function S15NotAIProblem() {
  return (
    <section className="slide">
      <div className="slide-inner text-center">
        <A><p className="tag">Insight</p></A>
        <A d={1}><h2>It wasn't an AI problem</h2></A>

        <div className="versus-grid" style={{ marginTop: 8 }}>
          <A v={scaleIn} d={2}>
            <div className="versus-card">
              <p className="versus-label" style={{ color: 'var(--amber-600)' }}>What the clinic thought</p>
              <p className="versus-desc" style={{ fontSize: 16 }}>We have an AI problem. The bot's answers aren't good enough.</p>
            </div>
          </A>
          <A v={scaleIn} d={3}>
            <div className="versus-card">
              <p className="versus-label" style={{ color: 'var(--green-600)' }}>What the data showed</p>
              <p className="versus-value"><AnimatedNumber value={375} /></p>
              <p className="versus-desc">patients stopped answering. Not because of bad AI — because <span className="hl">nobody followed up</span>.</p>
            </div>
          </A>
        </div>

        <A d={4}>
          <div className="lesson-card">
            <p className="lesson-label">Lesson learned</p>
            <p className="lesson-text">The clinics have no clear visibility into what's happening with the incoming patients.</p>
          </div>
        </A>
      </div>
    </section>
  )
}
