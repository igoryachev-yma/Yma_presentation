import A from '../components/A'

export default function S05Mentimeter2() {
  return (
    <section className="slide slide-activity">
      <div className="slide-inner text-center">
        <A>
          <div className="activity-badge">
            <span className="activity-dot" />
            Live poll
          </div>
        </A>
        <A d={1}>
          <h2>How does your team currently handle patient communication?</h2>
        </A>
        <A d={2}>
          <div className="embed-frame">
            <iframe
              src="https://www.mentimeter.com/app/presentation/alki6qg3furk3no9fpfmqvcmfv9hmqht/view?question=641aapu8rw3j"
              title="Mentimeter Poll"
              className="embed-iframe"
              allow="fullscreen"
            />
          </div>
        </A>
      </div>
    </section>
  )
}
