import { splitProps, type JSX } from 'solid-js'

export type ButtonProps = {
  color?: 'red' | 'gray'
}

function getTypography(color: ButtonProps['color']): string {
  switch (color) {
    case 'gray':
      return 'bg-gray-200 text-gray-900 enabled:hover:bg-gray-300 dark:text-gray-100 dark:bg-gray-700 enabled:dark:hover:bg-gray-800'
    case 'red':
      return 'bg-red-600 text-gray-100 enabled:hover:bg-red-700'
    default:
      return ''
  }
}

export default function Button(props: ButtonProps & JSX.IntrinsicElements['button']) {
  const typography = getTypography(props.color)
  const [, newProps] = splitProps(props, ['class'])

  return (
    <button
      class={`px-6 py-2.5 rounded shadow transition-colors disabled:opacity-50 ${typography} ${props.class}`}
      type="button"
      {...newProps}
    />
  )
}
