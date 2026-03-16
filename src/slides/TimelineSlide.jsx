import A, { scaleIn } from '../components/A'

const events = [
  {
    date: 'Q1 2026',
    title: 'First Milestone',
    desc: 'Brief description of what happened or will happen at this stage.',
    color: '#3b82f6',
  },
  {
    date: 'Q2 2026',
    title: 'Second Milestone',
    desc: 'Another key event or deliverable in the timeline.',
    stat: 'Key metric',
    color: '#22c55e',
  },
  {
    date: 'Q3 2026',
    title: 'Third Milestone',
    desc: 'Progress continues with this important development.',
    color: '#f59e0b',
  },
  {
    date: 'Q4 2026',
    title: 'Fourth Milestone',
    desc: 'The final stage or upcoming goal to highlight.',
    stat: 'Target reached',
    color: '#8b5cf6',
  },
]

export default function TimelineSlide() {
  return (
    <section className="slide">
      <div className="slide-inner slide-inner-wide">
        <A><p className="tag">Roadmap</p></A>
        <A d={1}><h2>Timeline Heading</h2></A>

        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-cards">
            {events.map((e, i) => (
              <A key={i} v={scaleIn} d={i + 2} className="timeline-card">
                <div className="timeline-accent" style={{ background: e.color }} />
                <div className="timeline-card-top">
                  <span className="timeline-date">{e.date}</span>
                </div>
                <h3 className="timeline-title">{e.title}</h3>
                <p className="timeline-desc">{e.desc}</p>
                {e.stat && <span className="timeline-stat-badge">{e.stat}</span>}
              </A>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
