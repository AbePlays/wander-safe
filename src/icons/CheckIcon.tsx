import { splitProps, type JSX } from 'solid-js'

export default function CheckIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
  const [, newProps] = splitProps(props, ['class'])

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={`w-5 h-5 ${props.class}`}
      {...newProps}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
