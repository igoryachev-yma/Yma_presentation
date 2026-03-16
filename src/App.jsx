import Progress from './components/Progress'
import TitleSlide from './slides/TitleSlide'
import ContentSlide from './slides/ContentSlide'
import TimelineSlide from './slides/TimelineSlide'
import DividerSlide from './slides/DividerSlide'
import FlipSlide from './slides/FlipSlide'
import ComparisonSlide from './slides/ComparisonSlide'
import ClosingSlide from './slides/ClosingSlide'

const SLIDE_COUNT = 7

export default function App() {
  return (
    <>
      <Progress count={SLIDE_COUNT} />

      <TitleSlide />

      <ContentSlide />

      <TimelineSlide />

      <DividerSlide
        tag="Next Steps"
        title="What's Ahead"
        subtitle="Key priorities and focus areas for the upcoming period"
        stats={[
          { value: 12, label: 'initiatives' },
          { value: 85, suffix: '%', label: 'on track' },
          { value: 3, label: 'milestones' },
        ]}
      />

      <FlipSlide />

      <ComparisonSlide />

      <ClosingSlide />
    </>
  )
}
