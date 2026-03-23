import A from '../components/A'

export default function S28SpecialOffer() {
  return (
    <section className="slide" style={{ background: 'var(--results-gradient)' }}>
      <div className="slide-inner text-center">
        <A><p className="tag">Exclusive</p></A>
        <A d={1}>
          <h2>Special offer</h2>
        </A>
        <A d={2}>
          <p className="subtitle" style={{ margin: '0 auto' }}>
            For webinar attendees — details by Boris Semenov
          </p>
        </A>
        <A d={3}>
          <div className="callout-stat" style={{ maxWidth: 480, margin: '28px auto 0' }}>
            <span className="callout-stat-label">Contact</span>
            <p className="callout-stat-text">Boris Semenov · Head of Client&nbsp;Success</p>
          </div>
        </A>
      </div>
    </section>
  )
}
