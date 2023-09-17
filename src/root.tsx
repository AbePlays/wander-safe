import Tabs from '@components/Tabs'
import AdditionalInformation from '@containers/AdditionalInformation'
import CoverageOptions from '@containers/CoverageOptions'
import PersonalInformation from '@containers/PersonalInformation'
import TripInformation from '@containers/TripInformation'

const TABS = [
  {
    id: '1',
    title: (
      <>
        Personal <br /> Information
      </>
    ),
    content: <PersonalInformation />
  },
  {
    id: '2',
    title: (
      <>
        Trip <br /> Information
      </>
    ),
    content: <TripInformation />
  },
  {
    id: '3',
    title: (
      <>
        Coverage <br /> Options
      </>
    ),
    content: <CoverageOptions />
  },
  {
    id: '4',
    title: (
      <>
        Additional <br /> Information
      </>
    ),
    content: <AdditionalInformation />
  }
]

export default function App() {
  return <Tabs class="mt-8" data={TABS} />
}
