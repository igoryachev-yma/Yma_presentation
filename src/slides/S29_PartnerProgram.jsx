import A, { scaleIn } from '../components/A'

export default function S29PartnerProgram() {
  return (
    <section className="slide slide-divider">
      <div className="slide-inner text-center">
        <A>
          <h1>Know a clinic?<br />Let's talk.</h1>
        </A>
        <A d={1}>
          <p className="subtitle" style={{ margin: '16px auto 0' }}>
            We're running a successful partner program. You refer us to a clinic we might help — we pay the referral fee.
          </p>
        </A>
        <A v={scaleIn} d={2}>
          <div className="qr-placeholder" style={{ marginTop: 32 }}>
            <span>QR → calendly.com/<wbr />b-semenov-reforma/30min</span>
          </div>
        </A>
      </div>
    </section>
  )
}
