import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="m-4 flex gap-4 items-center">
      <button
        class="bg-red-600 text-white px-8 py-2 grid place-content-center rounded"
        onClick={() => setCount((prev) => prev - 1)}
        type="button"
      >
        -
      </button>
      <span class="w-10 text-center">{count()}</span>
      <button
        class="bg-green-600 text-white px-8 py-2 grid place-content-center rounded"
        onClick={() => setCount((prev) => prev + 1)}
        type="button"
      >
        +
      </button>
    </div>
  )
}
