import { type JSX } from 'solid-js'

export type ButtonProps = {
  children: JSX.Element
  color?: 'red' | 'gray'
}

function getTypography(color: ButtonProps['color']): string {
  switch (color) {
    case 'gray':
      return 'bg-gray-200 text-gray-900 hover:bg-gray-300'
    case 'red':
      return 'bg-red-600 text-gray-100 hover:bg-red-700'
    default:
      return ''
  }
}

export default function Button(props: ButtonProps & Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'class'>) {
  const { children, classList = {}, color = 'red', ...rest } = props
  const typography = getTypography(color)

  return (
    <button
      class={`px-6 py-2.5 rounded shadow transition-colors ${typography} ${Object.keys(classList)}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
