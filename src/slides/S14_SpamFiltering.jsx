import A, { slideLeft, slideRight } from '../components/A'

export default function S14SpamFiltering() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Spam Auto-Filtering</h2></A>

        <div className="feature-grid">
          <A v={slideLeft} d={2}>
            <div className="feature-block">
              <p className="feature-label feature-label-problem">The problem</p>
              <p className="feature-text">Operators are often distracted by spam, irrelevant messages, or inappropriate content, which makes it harder to focus on real patient conversations that require attention.</p>
            </div>
          </A>
          <A v={slideRight} d={3}>
            <div className="feature-block">
              <p className="feature-label feature-label-solution">How it works</p>
              <p className="feature-text">Yma automatically detects and filters inappropriate or irrelevant messages. Harmful content is blocked. Less critical noise is <span className="hl-green">marked as spam</span> — accessible if needed but out of the way, letting your team focus on what truly matters.</p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
