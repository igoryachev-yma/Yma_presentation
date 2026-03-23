import A from '../components/A'

export default function S27DemoAnalytics() {
  return (
    <section className="slide slide-demo">
      <div className="slide-inner text-center">
        <A><p className="tag">Live demo</p></A>
        <A d={1}>
          <h1>Campaign Analytics</h1>
        </A>
        <A d={2}>
          <p className="subtitle" style={{ margin: '0 auto' }}>Real-time conversion tracking and quality control</p>
        </A>
        <A d={3}>
          <div className="demo-steps">
            <span className="demo-step">Funnel status</span>
            <span className="demo-arrow">→</span>
            <span className="demo-step">Source breakdown</span>
            <span className="demo-arrow">→</span>
            <span className="demo-step">Quality analysis</span>
          </div>
        </A>
      </div>
    </section>
  )
}
