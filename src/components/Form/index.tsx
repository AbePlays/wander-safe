import type { JSX } from 'solid-js'

export type FormProps = {
  children: JSX.Element
}

function Form(props: FormProps & Omit<JSX.IntrinsicElements['form'], 'class'>) {
  const { children, classList = {}, ...rest } = props

  return (
    <form class={`${Object.keys(classList)}`} {...rest}>
      {children}
    </form>
  )
}

export type FormHeadingProps = {
  children: JSX.Element
}

Form.Heading = function Heading(props: FormHeadingProps & Omit<JSX.IntrinsicElements['h2'], 'class'>) {
  const { children, classList = {}, ...rest } = props

  return (
    <h2 class={`text-3xl font-bold ${Object.keys(classList)}`} {...rest}>
      {children}
    </h2>
  )
}

export default Form
