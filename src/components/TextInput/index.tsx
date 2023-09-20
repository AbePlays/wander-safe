import { Show, type JSX, splitProps } from 'solid-js'

export type TextInputProps = {
  errorMessage?: string | undefined
  label: string
}

export default function TextInput(props: TextInputProps & JSX.IntrinsicElements['input']) {
  const [, newProps] = splitProps(props, ['class', 'errorMessage'])

  return (
    <>
      <div class="relative">
        <input
          aria-errormessage={`${props.name}-error`}
          aria-invalid={!!props.errorMessage}
          id={`${props.name}-input`}
          class={`block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
            props.class
          } ${props.errorMessage ? 'border-red-600' : null}`}
          placeholder=" "
          type="text"
          {...newProps}
        />
        <label
          class="absolute text-sm text-gray-600 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 pointer-events-none"
          for={`${props.name}-input`}
        >
          {props.label}
        </label>
      </div>
      <Show when={(props.errorMessage?.length || 0) > 0}>
        <span class="text-red-600 text-sm" id={`${props.name}-error`}>
          {props.errorMessage}
        </span>
      </Show>
    </>
  )
}
