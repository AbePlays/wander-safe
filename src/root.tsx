import Tabs from '@components/Tabs'

const TABS = [
  {
    id: '1',
    title: (
      <>
        Personal <br /> Information
      </>
    ),
    content: <div>Personal Information</div>
  },
  {
    id: '2',
    title: (
      <>
        Trip <br /> Information
      </>
    ),
    content: <div>Trip Information</div>
  },
  {
    id: '3',
    title: (
      <>
        Coverage <br /> Options
      </>
    ),
    content: <div>Coverage Options</div>
  },
  {
    id: '4',
    title: (
      <>
        Additional <br /> Information
      </>
    ),
    content: <div>Additional Information</div>
  }
]
export default function App() {
  return <Tabs class="mt-8" data={TABS} />
}
