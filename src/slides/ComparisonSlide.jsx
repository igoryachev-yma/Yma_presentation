import A from '../components/A'
import ChatMockup from '../components/ChatMockup'

const beforeMessages = [
  {
    role: 'user',
    content: 'Example user question or request goes here.',
  },
  {
    role: 'assistant',
    content: 'Generic or limited response without context. The answer is basic and unhelpful.',
  },
]

const afterMessages = [
  {
    role: 'user',
    content: 'Same question or request from the user.',
  },
  {
    role: 'assistant',
    content: 'A much better, personalized response with full context. Specific details, actionable next steps, and relevant data are included.',
  },
]

export default function ComparisonSlide() {
  return (
    <section className="slide">
      <div className="slide-inner slide-inner-wide">
        <A><p className="tag">Before & After</p></A>
        <A d={1}><h2>Comparison Heading</h2></A>

        <div className="comparison">
          <A d={2} className="comparison-panel">
            <span className="comparison-label comparison-label-before">Before</span>
            <ChatMockup messages={beforeMessages} compact title="Without Us" />
          </A>
          <A d={4} className="comparison-panel">
            <span className="comparison-label comparison-label-after">After</span>
            <ChatMockup messages={afterMessages} compact title="With Us" delay={2500} />
          </A>
        </div>
      </div>
    </section>
  )
}
