import { type JSX, splitProps } from 'solid-js'

function Form(props: JSX.IntrinsicElements['form']) {
  return <form {...props} />
}

Form.Heading = function Heading(props: JSX.IntrinsicElements['h2']) {
  const [, newProps] = splitProps(props, ['class'])
  return <h2 class={`text-3xl font-bold dark:text-gray-100 ${props.class}`} {...newProps} />
}

export default Form
