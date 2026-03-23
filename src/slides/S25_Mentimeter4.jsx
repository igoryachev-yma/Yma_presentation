import A from '../components/A'

export default function S25Mentimeter4() {
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
          <h2>What would you most want AI to&nbsp;handle?</h2>
        </A>
        <A d={2}>
          <div className="embed-frame">
            <iframe
              src="https://www.mentimeter.com/app/presentation/alki6qg3furk3no9fpfmqvcmfv9hmqht/view?question=sdcf38ygk2ko"
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
