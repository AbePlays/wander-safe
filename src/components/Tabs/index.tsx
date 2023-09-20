import { Tabs as KobalteTabs } from '@kobalte/core'
import { For, type JSX, splitProps } from 'solid-js'

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
        <For each={props.data}>
          {(tab) => (
            <>
              <KobalteTabs.Trigger
                class="text-left w-full group text-gray-400 data-[selected]:text-gray-900"
                value={tab.id}
              >
                {tab.title}
                <div
                  aria-hidden="true"
                  class="bg-gray-200 rounded-full w-full h-1.5 mt-3 group-data-[selected]:bg-red-600"
                />
              </KobalteTabs.Trigger>
            </>
          )}
        </For>
      </KobalteTabs.List>

      <For each={props.data}>{(tab) => <KobalteTabs.Content value={tab.id}>{tab.content}</KobalteTabs.Content>}</For>
    </KobalteTabs.Root>
  )
}
