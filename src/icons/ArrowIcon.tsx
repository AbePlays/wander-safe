import { type JSX, splitProps } from 'solid-js'

export default function ArrowIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
  const [, newProps] = splitProps(props, ['class'])

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class={`w-5 h-5 ${props.class}`}
      {...newProps}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12H3" color="darkgray" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5" />
    </svg>
  )
}
