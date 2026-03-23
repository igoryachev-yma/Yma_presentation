import A from '../components/A'

export default function S01Title() {
  return (
    <section className="slide slide-title">
      <div className="title-gradient" />

      <svg className="title-ring" viewBox="0 0 500 500" fill="none">
        <circle
          cx="250"
          cy="250"
          r="210"
          stroke="url(#ringGrad)"
          strokeWidth="16"
          fill="none"
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ADE3ED" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C1ECDF" />
            <stop offset="100%" stopColor="#ADE3ED" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="slide-inner title-inner">
        <A>
          <img src="/yma_logo.svg" alt="Yma" className="title-logo" />
        </A>

        <A d={1}>
          <h1 className="title-heading">
            AI for healthcare<br />beyond the hype
          </h1>
          <p className="title-desc">
            From promise to profit
          </p>
        </A>

        <A d={2}>
          <p className="title-webinar-label">WEBINAR #2 | YMA HEALTH | 25 MARCH 2026</p>
        </A>
      </div>
    </section>
  )
}
