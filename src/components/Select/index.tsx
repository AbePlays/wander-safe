import { Select as KobalteSelect } from '@kobalte/core'
import { Show, splitProps } from 'solid-js'

import CheckIcon from '@icons/CheckIcon'
import ChevronIcon from '@icons/ChevronIcon'

export type SelectProps = {
  errorMessage?: string | undefined
  label: string
  triggerLabel?: string
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function Select(props: SelectProps & KobalteSelect.SelectRootProps<any>) {
  const [, newProps] = splitProps(props, ['errorMessage', 'label', 'triggerLabel', 'multiple'])

  return (
    <KobalteSelect.Root itemComponent={(props) => <Select.Item {...props} />} multiple={props.multiple} {...newProps}>
      <KobalteSelect.HiddenSelect aria-errormessage={`${props.name}-error`} aria-invalid={!!props.errorMessage} />

      <KobalteSelect.Trigger
        class={`flex relative items-center justify-between px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer dark:border-gray-700 ${
          props.class
        } ${props.errorMessage ? 'border-red-600 dark:border-red-500 border-2' : null}`}
        aria-label={props.triggerLabel || ''}
      >
        <span class="absolute text-sm text-gray-600 dark:text-gray-100 -translate-y-3.5 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 left-1 pointer-events-none">
          {props.label}
        </span>

        <KobalteSelect.Value class="dark:text-gray-100">{(state) => <>{state.selectedOption()}</>}</KobalteSelect.Value>
        <KobalteSelect.Icon class="data-[expanded]:rotate-180 transition-transform duration-300 dark:text-gray-100">
          <ChevronIcon />
        </KobalteSelect.Icon>
      </KobalteSelect.Trigger>

      <Show when={(props.errorMessage?.length || 0) > 0}>
        <span class="text-red-600 dark:text-red-500 text-sm" id={`${props.name}-error`}>
          {props.errorMessage}
        </span>
      </Show>

      <KobalteSelect.Portal>
        <KobalteSelect.Content
          class="bg-white dark:bg-gray-900 shadow border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none py-1.5 z-10 data-[expanded]:animate-[fade-slide-down_200ms]
        data-[closed]:animate-[fade-slide-up_200ms]
        "
        >
          <KobalteSelect.Listbox class="focus:outline-none" />
        </KobalteSelect.Content>
      </KobalteSelect.Portal>
    </KobalteSelect.Root>
  )
}

Select.Item = function Item(props: KobalteSelect.SelectItemProps) {
  return (
    <KobalteSelect.Item
      class="py-2 px-4 hover:bg-gray-100 focus:outline-none dark:text-gray-100 dark:hover:bg-gray-700 flex items-center dark:focus:bg-gray-700 focus:bg-gray-100 justify-between"
      {...props}
    >
      <KobalteSelect.ItemLabel class="text-sm">{props.item.rawValue}</KobalteSelect.ItemLabel>
      <KobalteSelect.ItemIndicator>
        <CheckIcon />
      </KobalteSelect.ItemIndicator>
    </KobalteSelect.Item>
  )
}

export default Select
