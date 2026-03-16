import A from '../components/A'

export default function TitleSlide() {
  return (
    <section className="slide slide-title">
      <div className="title-gradient" />

      {/* Decorative swirl — animated SVG stroke */}
      <svg className="title-swirl" viewBox="0 0 600 600" fill="none">
        <path
          className="title-swirl-path"
          d="M 480 100 C 520 180, 500 280, 420 320 C 340 360, 240 340, 200 280 C 160 220, 180 140, 260 120 C 340 100, 400 160, 380 220 C 360 280, 280 300, 240 260"
          stroke="url(#swirlGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="swirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C1ECDF" />
            <stop offset="50%" stopColor="#ADE3ED" />
            <stop offset="100%" stopColor="#C1ECDF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="slide-inner title-inner">
        <A>
          <img src="/yma_logo.svg" alt="Yma" className="title-logo" />
        </A>

        <A d={1}>
          <h1 className="title-heading">
            Presentation Title Goes Here
          </h1>
          <p className="title-desc">
            A brief description of the presentation — one or two sentences
            explaining the purpose and context.
          </p>
        </A>

        <A d={2}>
          <div className="title-meta">
            <span className="title-badge">Category</span>
            <span className="title-date">Month Year</span>
          </div>
        </A>
      </div>
    </section>
  )
}
