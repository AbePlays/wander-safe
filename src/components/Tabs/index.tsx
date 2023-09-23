import { Tabs as KobalteTabs } from '@kobalte/core'
import { type JSX, splitProps } from 'solid-js'

export type TabProps = {
  data: {
    id: string
    title: JSX.Element
    content: JSX.Element
  }[]
}

export default function Tabs(props: TabProps & KobalteTabs.TabsRootProps) {
  const [, newProps] = splitProps(props, ['data'])

  return (
    <KobalteTabs.Root activationMode="manual" aria-label="Main navigation" {...newProps}>
      <KobalteTabs.List class="flex gap-4 flex-wrap sm:flex-nowrap">
        {props.data.map((tab) => {
          const currTabIndex = props.data.findIndex((item) => item.id === tab.id)
          const selectedTabIndex = props.data.findIndex((item) => item.id === props.value)

          const isActive = currTabIndex <= selectedTabIndex

          return (
            <KobalteTabs.Trigger
              class={`text-left w-full group ${isActive ? 'text-gray-900' : 'text-gray-400'}`}
              disabled={!isActive}
              value={tab.id}
            >
              {tab.title}
              <div
                aria-hidden="true"
                class={`rounded-full w-full h-1.5 mt-3 ${isActive ? 'bg-red-600' : 'bg-gray-200'}`}
              />
            </KobalteTabs.Trigger>
          )
        })}
      </KobalteTabs.List>

      {props.data.map((tab) => (
        <KobalteTabs.Content value={tab.id}>{tab.content}</KobalteTabs.Content>
      ))}
    </KobalteTabs.Root>
  )
}
