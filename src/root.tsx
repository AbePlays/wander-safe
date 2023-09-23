import { createSignal } from 'solid-js'

import Tabs from '@components/Tabs'
import AdditionalInformation from '@containers/AdditionalInformation'
import CoverageOptions from '@containers/CoverageOptions'
import PersonalInformation from '@containers/PersonalInformation'
import TripInformation from '@containers/TripInformation'

function makeTabs(setSelectedTab: (val: string) => void) {
  const TABS = [
    {
      id: '1',
      title: (
        <>
          Personal <br /> Information
        </>
      ),
      content: <PersonalInformation incrementTab={() => setSelectedTab('2')} />
    },
    {
      id: '2',
      title: (
        <>
          Trip <br /> Information
        </>
      ),
      content: <TripInformation decrementTab={() => setSelectedTab('1')} incrementTab={() => setSelectedTab('3')} />
    },
    {
      id: '3',
      title: (
        <>
          Coverage <br /> Options
        </>
      ),
      content: <CoverageOptions decrementTab={() => setSelectedTab('2')} incrementTab={() => setSelectedTab('4')} />
    },
    {
      id: '4',
      title: (
        <>
          Additional <br /> Information
        </>
      ),
      content: <AdditionalInformation decrementTab={() => setSelectedTab('3')} />
    }
  ]
  return TABS
}

export default function App() {
  const [selectedTab, setSelectedTab] = createSignal('1')
  const tabs = makeTabs(setSelectedTab)

  function handleTabChange(value: string) {
    const currTabIndex = tabs.findIndex((tab) => tab.id === selectedTab())
    const targetTabIndex = tabs.findIndex((tab) => tab.id === value)

    if (targetTabIndex < currTabIndex) {
      setSelectedTab(value)
    }
  }

  return (
    <div>
      <Tabs data={tabs} value={selectedTab()} onChange={handleTabChange} />
    </div>
  )
}
