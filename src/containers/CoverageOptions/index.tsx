import { createSignal } from 'solid-js'
import { type Input, enumType, object, safeParse, string, minValue } from 'valibot'

import Button from '@components/Button'
import Form from '@components/Form'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import ArrowIcon from '@icons/ArrowIcon'

const CoverageOptionsSchema = object({
  typeOfCoverage: enumType(['Departure Trip', 'Return Trip', 'Both'], 'Invalid option'),
  medicalCoverageAmount: string([minValue('1', 'Invalid amount')]),
  tripCancellationCoverage: enumType(['Yes', 'No'], 'Invalid option'),
  baggageCoverage: enumType(['Yes', 'No'], 'Invalid option'),
  emergencyEvacuationCoverage: enumType(['Yes', 'No'], 'Invalid option')
})

type FormKeys = keyof Input<typeof CoverageOptionsSchema>

type FormType = {
  field: Partial<Record<FormKeys, string>>
  error: Partial<Record<FormKeys, string>>
}

export default function CoverageOptions() {
  const [form, setForm] = createSignal<FormType>({ error: {}, field: {} })

  function validateForm(e: Event) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement))
    const res = safeParse(CoverageOptionsSchema, formData)

    if (res.success) {
      setForm({ error: {}, field: res.output })
    } else {
      const newForm: FormType = { error: {}, field: {} }
      res.issues.forEach((issue) => {
        const key: FormKeys = Array.isArray(issue.path) ? issue.path[0]?.key : null
        newForm.error[key] = issue.message
        newForm.field = issue.input
      })
      setForm(newForm)
    }
  }

  return (
    <Form class="mt-12" onSubmit={validateForm}>
      <Form.Heading>Coverage Options</Form.Heading>

      <div class="space-y-4 my-8">
        <Select
          errorMessage={form().error.typeOfCoverage}
          label="Type of Coverage"
          name="typeOfCoverage"
          options={['Departure Trip', 'Return Trip', 'Both']}
          placeholder="Select an option"
        />

        <TextInput
          errorMessage={form().error.medicalCoverageAmount}
          label="Medical Coverage Amount($)"
          name="medicalCoverageAmount"
          step="0.01"
          type="number"
        />

        <Select
          errorMessage={form().error.tripCancellationCoverage}
          label="Trip Cancellation Coverage"
          name="tripCancellationCoverage"
          options={['Yes', 'No']}
          placeholder="Select an option"
        />

        <Select
          errorMessage={form().error.baggageCoverage}
          label="Baggage Coverage"
          name="baggageCoverage"
          options={['Yes', 'No']}
          placeholder="Select an option"
        />

        <Select
          errorMessage={form().error.emergencyEvacuationCoverage}
          label="Emergency Evacuation Coverage"
          name="emergencyEvacuationCoverage"
          options={['Yes', 'No']}
          placeholder="Select an option"
        />
      </div>

      <div class="flex gap-4 font-medium text-sm">
        <Button class="flex gap-2 items-center" color="gray">
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
