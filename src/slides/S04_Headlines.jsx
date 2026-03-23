import A, { scaleIn } from '../components/A'

export default function S04Headlines() {
  return (
    <section className="slide">
      <div className="slide-inner slide-inner-wide text-center">
        <A><p className="tag">The narrative</p></A>
        <A d={1}><h2>What the headlines say</h2></A>

        <div className="card-grid card-grid-3">
          <A v={scaleIn} d={2}>
            <div className="headline-card headline-card-with-img">
              <img src="/headline-1.png" alt="Bill Gates headline" />
              <p>"AI will replace doctors<br />within 5 years"</p>
            </div>
          </A>
          <A v={scaleIn} d={3}>
            <div className="headline-card headline-card-with-img">
              <img src="/headline-2.png" alt="ChatGPT healthcare headline" />
              <p>"ChatGPT to save healthcare $360&nbsp;billion"</p>
            </div>
          </A>
          <A v={scaleIn} d={4}>
            <div className="headline-card headline-card-with-img">
              <img src="/headline-3.png" alt="AI healthcare predictions headline" />
              <p>"Every clinic will be AI&#8209;powered by&nbsp;2026"</p>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
