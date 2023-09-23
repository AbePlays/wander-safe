import { splitProps, type JSX } from 'solid-js'

export default function CrossIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
  const [, newProps] = splitProps(props, ['class'])

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={`w-5 h-5 ${props.class}`}
      {...newProps}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
