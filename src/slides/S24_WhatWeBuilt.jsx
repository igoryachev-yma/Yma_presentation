import A, { scaleIn } from '../components/A'

const features = [
  {
    title: 'Clinic Workspace',
    desc: 'All conversations in one place',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    title: 'Safe Mode',
    desc: 'AI suggests, human approves',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: 'green',
  },
  {
    title: 'Spam Auto-Filtering',
    desc: 'Focus on real patients',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    color: 'amber',
  },
  {
    title: 'Smart Prioritization & Analytics',
    desc: 'Never miss a hot lead',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    color: 'blue',
  },
  {
    title: 'Custom Knowledge Base',
    desc: 'Your services, your rules',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    color: 'green',
  },
  {
    title: 'Inquiry Classification',
    desc: 'Auto-categorize every conversation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    color: 'amber',
  },
]

export default function S24WhatWeBuilt() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Platform</p></A>
        <A d={1}><h2>What we built</h2></A>

        <div className="card-grid card-grid-3">
          {features.map((f, i) => (
            <A v={scaleIn} d={i + 2} key={i}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className={`card-icon card-icon-${f.color}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </A>
          ))}
        </div>

        <A d={8}>
          <div className="gradient-footer" style={{ marginTop: 16 }}>
            <span>Integrations:</span> Altegio · Simplex · Insta by Practo &nbsp;|&nbsp; <span>Channels:</span> WhatsApp (API / WABA coexistence) · Instagram Direct · Website leadforms
          </div>
        </A>
      </div>
    </section>
  )
}
