import A, { scaleIn } from '../components/A'

export default function S06Reality() {
  const crossIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F2688B" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )

  const challenges = [
    {
      title: 'Integrations are crazy hard',
      text: 'AI needs real-time access to scheduling, patient data, and communication channels. But most clinics run on fragmented or legacy systems that don\'t talk to each other.',
    },
    {
      title: 'Workflow mismatch',
      text: 'Teams try to automate complex, exception-heavy processes without clearly defining rules. Result: errors, escalations, and frustrated patients.',
    },
    {
      title: 'Overestimating autonomy',
      text: 'AI can handle routine requests well. But insurance issues, complaints, and clinical questions still need human judgment.',
    },
  ]

  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">The reality</p></A>
        <A d={1}><h2>3 key challenges clinics face when trying to implement AI</h2></A>

        <div className="card-grid card-grid-3">
          {challenges.map((c, i) => (
            <A v={scaleIn} d={i + 3} key={i}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #FFF8FB, #F8E7F0)' }}>{crossIcon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  )
}
