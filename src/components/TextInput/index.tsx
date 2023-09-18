import { type JSX } from 'solid-js'

export type TextInputProps = {
  label: string
  type?: string
}

export default function TextInput(props: TextInputProps & Omit<JSX.HTMLAttributes<HTMLInputElement>, 'class'>) {
  const { classList = {}, label, ...rest } = props

  return (
    <div class="relative">
      <input
        id={`${label}-input`}
        class={`block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${Object.keys(
          classList
        )}`}
        placeholder=" "
        type="text"
        {...rest}
      />
      <label
        class="absolute text-sm text-gray-600 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 pointer-events-none"
        for={`${label}-input`}
      >
        {label}
      </label>
    </div>
  )
}
