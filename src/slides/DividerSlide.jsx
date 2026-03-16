import A, { blur } from '../components/A'
import AnimatedNumber from '../components/AnimatedNumber'

export default function DividerSlide({
  tag = 'Section',
  title = 'Section Title',
  subtitle,
  stats,
}) {
  return (
    <section className="slide slide-divider">
      <div className="slide-inner text-center">
        <A><p className="tag">{tag}</p></A>
        <A d={1}><h1>{title}</h1></A>
        {subtitle && <A d={2}><p className="subtitle">{subtitle}</p></A>}

        {stats && (
          <A d={3} className="divider-stats">
            {stats.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="divider-stat-sep" />}
                <div className="divider-stat">
                  <span className="divider-stat-value">
                    <AnimatedNumber value={s.value} suffix={s.suffix || ''} />
                  </span>
                  <span className="divider-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </A>
        )}
      </div>
    </section>
  )
}
