import { isAfter, isSameDay, isToday } from 'date-fns'
import { createSignal } from 'solid-js'
import { type Input, custom, enumType, isoDate, minLength, object, safeParse, string } from 'valibot'

import Button from '@components/Button'
import Form from '@components/Form'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import ArrowIcon from '@icons/ArrowIcon'

const TripInformationSchema = object(
  {
    departureCountry: string([minLength(2, 'Should have atleast 2 characters')]),
    destinationCountry: string([minLength(2, 'Should have atleast 2 characters')]),
    departureDate: string([
      isoDate(),
      custom(
        (date) => isAfter(new Date(date), new Date()) || isToday(new Date(date)),
        "The Departure Date must be on or after today's date."
      )
    ]),
    returnDate: string([isoDate()]),
    numberOfTravelers: enumType(['1', '2'], 'Invalid selection')
  },
  [
    (input) => {
      const isSuccess =
        isAfter(new Date(input.returnDate), new Date(input.departureDate)) ||
        isSameDay(new Date(input.departureDate), new Date(input.returnDate))

      if (!isSuccess) {
        return {
          issues: [
            {
              validation: 'custom',
              message: 'The Return Date must be on or after the Departure Date',
              input,
              path: [{ schema: 'object', input: input, key: 'returnDate', value: input.returnDate }]
            }
          ]
        }
      }
      return { output: input }
    }
  ]
)

type FormKeys = keyof Input<typeof TripInformationSchema>

type FormType = {
  field: Partial<Record<FormKeys, string>>
  error: Partial<Record<FormKeys, string>>
}

export default function TripInformation(props: { incrementTab: () => void; decrementTab: () => void }) {
  const [form, setForm] = createSignal<FormType>({ error: {}, field: {} })

  function validateForm(e: Event) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement))
    const res = safeParse(TripInformationSchema, formData)

    if (res.success === false) {
      const newForm: FormType = { error: {}, field: {} }
      res.issues.forEach((issue) => {
        const key: FormKeys = Array.isArray(issue.path) ? issue.path[0]?.key : null
        if (!newForm.error[key]) {
          newForm.error[key] = issue.message
          newForm.field = issue.input
        }
      })
      setForm(newForm)
    } else {
      setForm({ error: {}, field: res.output })
      props.incrementTab()
    }
  }

  return (
    <Form class="mt-12" onSubmit={validateForm}>
      <Form.Heading>Trip Information</Form.Heading>

      <div class="space-y-4 my-8">
        <TextInput errorMessage={form().error.departureCountry} label="Departure Country" name="departureCountry" />
        <TextInput
          errorMessage={form().error.destinationCountry}
          label="Destination Country"
          name="destinationCountry"
        />
        <TextInput errorMessage={form().error.departureDate} label="Departure Date" name="departureDate" type="date" />
        <TextInput errorMessage={form().error.returnDate} label="Return Date" name="returnDate" type="date" />
        <Select
          errorMessage={form().error.numberOfTravelers}
          label="Number of Travelers"
          name="numberOfTravelers"
          placeholder="Select an option"
          options={[1, 2]}
        />
      </div>

      <div class="flex gap-4 font-medium text-sm">
        <Button class="flex gap-2 items-center" color="gray" onClick={props.decrementTab}>
          <ArrowIcon class="rotate-180" />
          Back
        </Button>
        <Button class="flex gap-2 items-center" color="red" type="submit">
          Next
          <ArrowIcon class="text-white" />
        </Button>
      </div>
    </Form>
  )
}
