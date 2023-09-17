import type { JSX } from 'solid-js'

export type FormProps = {
  children: JSX.Element
}

function Form(props: FormProps & Omit<JSX.HTMLAttributes<HTMLFormElement>, 'class'>) {
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

Form.Heading = function Heading(props: FormHeadingProps & Omit<JSX.HTMLAttributes<HTMLHeadingElement>, 'class'>) {
  const { children, classList = {}, ...rest } = props

  return (
    <h2 class={`text-3xl font-bold ${Object.keys(classList)}`} {...rest}>
      {children}
    </h2>
  )
}

export default Form
