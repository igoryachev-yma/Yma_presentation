import A from '../components/A'

export default function S13TwoBots() {
  return (
    <section className="slide slide-divider">
      <div className="slide-inner text-center">
        <A><p className="tag">Watch</p></A>
        <A d={1}><h1>Two bots in a room</h1></A>
        <A d={2}>
          <p className="subtitle" style={{ margin: '0 auto 24px' }}>ChatGPT saying goodbye to ChatGPT</p>
        </A>
        <A d={3}>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/EeNEQpyuOxo"
              title="Two bots in a room"
              className="video-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </A>
      </div>
    </section>
  )
}
