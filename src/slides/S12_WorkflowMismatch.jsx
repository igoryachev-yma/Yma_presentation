import A from '../components/A'

export default function S12WorkflowMismatch() {
  return (
    <section className="slide slide-divider">
      <div className="slide-inner text-center">
        <A><p className="tag">Challenge #2</p></A>
        <A d={1}>
          <h1>Workflow mismatch</h1>
        </A>
        <A d={2}>
          <p className="subtitle" style={{ margin: '0 auto' }}>
            Teams try to automate complex, exception-heavy processes without clearly defining rules. Result: errors, escalations, and frustrated patients.
          </p>
        </A>
      </div>
    </section>
  )
}
