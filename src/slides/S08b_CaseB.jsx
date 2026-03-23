import A from '../components/A'
import ChatMockup from '../components/ChatMockup'

const messages = [
  { role: 'user', content: 'Saw your ad — is it true you can lose up to 6cm on the waist?' },
  { role: 'assistant', content: 'Pressotherapy is a relaxing procedure that supports lymphatic drainage and helps reduce water retention. That said, according to general medical sources, it is not considered an effective standalone method for weight loss or significant body reshaping.' },
  { role: 'user', content: 'Wait… your ad literally promises minus 6cm on the waist?' },
  { role: 'assistant', content: 'Results can vary from person to person. For best results, it is often recommended as part of a broader wellness routine. Would you like to book a consultation?' },
  { role: 'user', content: 'So you\'re telling me the ad is wrong?' },
  { role: 'assistant', content: 'I understand the confusion! I\'d recommend speaking directly with one of our specialists who can walk you through what to expect.' },
]

export default function S08bCaseB() {
  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">Clinic info vs bot</p></A>
        <A d={1}><h2>Case B: The discount that doesn't exist</h2></A>

        <A d={2}>
          <ChatMockup messages={messages} title="AI Bot" speed={1.3} />
        </A>

        <A d={3}>
          <div className="lesson-card">
            <p className="lesson-label">Lesson learned</p>
            <p className="lesson-text">AI doesn't know where to look for the price and agrees to 80% discounts on high-value procedures.</p>
          </div>
        </A>
      </div>
    </section>
  )
}
