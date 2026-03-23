import Progress from './components/Progress'
import S01Title from './slides/S01_Title'
import S02Mentimeter1 from './slides/S02_Mentimeter1'
import S03Speakers from './slides/S03_Speakers'
import S04Headlines from './slides/S04_Headlines'
import S05Mentimeter2 from './slides/S05_Mentimeter2'
import S06Reality from './slides/S06_Reality'
import S07IntegrationsPain from './slides/S07_IntegrationsPain'
import S08ClinicVsBot from './slides/S08_ClinicVsBot'
import S08bCaseB from './slides/S08b_CaseB'
import S09ServiceCatalog from './slides/S09_ServiceCatalog'
import S10WhatsApp from './slides/S10_WhatsApp'
import S11WABACoexistence from './slides/S11_WABACoexistence'
import S12WorkflowMismatch from './slides/S12_WorkflowMismatch'
import S13TwoBots from './slides/S13_TwoBots'
import S14SpamFiltering from './slides/S14_SpamFiltering'
import S15NotAIProblem from './slides/S15_NotAIProblem'
import S16SmartPrioritization from './slides/S16_SmartPrioritization'
import S17Analytics from './slides/S17_Analytics'
import S18OverestimatingAutonomy from './slides/S18_OverestimatingAutonomy'
import S19Mentimeter3 from './slides/S19_Mentimeter3'
import S20HelpfulTooFar from './slides/S20_HelpfulTooFar'
import S21SafeMode from './slides/S21_SafeMode'
import S22Evolution from './slides/S22_Evolution'
import S23Transition from './slides/S23_Transition'
import S24WhatWeBuilt from './slides/S24_WhatWeBuilt'
import S25Mentimeter4 from './slides/S25_Mentimeter4'
import S26DemoReactivation from './slides/S26_DemoReactivation'
import S27DemoAnalytics from './slides/S27_DemoAnalytics'
import S28SpecialOffer from './slides/S28_SpecialOffer'
import S29PartnerProgram from './slides/S29_PartnerProgram'
import S30Close from './slides/S30_Close'

const SLIDE_COUNT = 31

export default function App() {
  return (
    <>
      <Progress count={SLIDE_COUNT} />

      <S01Title />
      <S02Mentimeter1 />
      <S03Speakers />
      <S04Headlines />
      <S05Mentimeter2 />
      <S06Reality />
      <S07IntegrationsPain />
      <S08ClinicVsBot />
      <S08bCaseB />
      <S09ServiceCatalog />
      <S10WhatsApp />
      <S11WABACoexistence />
      <S12WorkflowMismatch />
      <S13TwoBots />
      <S14SpamFiltering />
      <S15NotAIProblem />
      <S16SmartPrioritization />
      <S17Analytics />
      <S18OverestimatingAutonomy />
      <S19Mentimeter3 />
      <S20HelpfulTooFar />
      <S21SafeMode />
      <S22Evolution />
      <S23Transition />
      <S24WhatWeBuilt />
      <S25Mentimeter4 />
      <S26DemoReactivation />
      <S27DemoAnalytics />
      <S28SpecialOffer />
      <S29PartnerProgram />
      <S30Close />
    </>
  )
}
