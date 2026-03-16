import A, { scaleIn } from '../components/A'
import DecoCircle from '../components/DecoCircle'

export default function ContentSlide() {
  const cards = [
    {
      icon: '📊',
      iconColor: 'card-icon-blue',
      title: 'Card Title One',
      text: 'Brief description of this point. Keep it concise — two lines maximum.',
      chip: { label: 'Done', className: 'chip-done' },
    },
    {
      icon: '🚀',
      iconColor: 'card-icon-green',
      title: 'Card Title Two',
      text: 'Another key point or achievement to highlight in the presentation.',
      chip: { label: 'In Progress', className: 'chip-progress' },
    },
    {
      icon: '🎯',
      iconColor: 'card-icon-amber',
      title: 'Card Title Three',
      text: 'Third important item with relevant context and details.',
      chip: { label: 'New', className: 'chip-new' },
    },
    {
      icon: '💡',
      iconColor: 'card-icon-blue',
      title: 'Card Title Four',
      text: 'Final point to round out the overview. Summaries work well here.',
    },
  ]

  return (
    <section className="slide">
      <DecoCircle />
      <div className="slide-inner">
        <A><p className="tag">Overview</p></A>
        <A d={1}><h2>Slide Heading</h2></A>
        <A d={2}><p className="section-subtitle">Optional subtitle for additional context</p></A>

        <div className="card-grid">
          {cards.map((c, i) => (
            <A key={i} v={scaleIn} d={i + 3} className="card">
              <div className={`card-icon ${c.iconColor}`}>{c.icon}</div>
              <div className="card-header">
                <h3>{c.title}</h3>
                {c.chip && <span className={`chip ${c.chip.className}`}>{c.chip.label}</span>}
              </div>
              <p>{c.text}</p>
            </A>
          ))}
        </div>
      </div>
    </section>
  )
}
