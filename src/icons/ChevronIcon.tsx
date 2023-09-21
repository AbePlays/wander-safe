import { splitProps, type JSX } from 'solid-js'

export default function ChevronIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
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
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}
