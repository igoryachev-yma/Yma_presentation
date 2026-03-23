import A from '../components/A'

export default function S26DemoReactivation() {
  return (
    <section className="slide slide-demo">
      <div className="slide-inner text-center">
        <A><p className="tag">Live demo</p></A>
        <A d={1}>
          <h1>Let's see it live</h1>
        </A>
        <A d={2}>
          <p className="subtitle" style={{ margin: '0 auto' }}>Reactivation</p>
        </A>
        <A d={3}>
          <div className="demo-steps">
            <span className="demo-step">Select patients</span>
            <span className="demo-arrow">→</span>
            <span className="demo-step">Configure campaign</span>
            <span className="demo-arrow">→</span>
            <span className="demo-step">AI sends messages</span>
            <span className="demo-arrow">→</span>
            <span className="demo-step">Track results</span>
          </div>
        </A>
      </div>
    </section>
  )
}
