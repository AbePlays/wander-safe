import { createSignal } from 'solid-js'
import { type Input, enumType, minLength, object, safeParse, string } from 'valibot'

import Button from '@components/Button'
import Form from '@components/Form'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import ArrowIcon from '@icons/ArrowIcon'
import AcknowledgementModal from '@containers/AcknowledgementModal'

const AdditionalInformationSchema = object({
  passportNumber: string([minLength(1, 'Required')]),
  address: string([minLength(1, 'Required')]),
  city: string([minLength(1, 'Required')]),
  zipCode: string([minLength(1, 'Required')]),
  travellingWithPets: enumType(['Yes', 'No'], 'Invalid option'),
  medicalConditions: enumType(['Yes', 'No'], 'Invalid option'),
  specialRequests: enumType(['Yes', 'No'], 'Invalid option')
})

type FormKeys = keyof Input<typeof AdditionalInformationSchema>

type FormType = {
  field: Partial<Record<FormKeys, string>>
  error: Partial<Record<FormKeys, string>>
}

export default function AdditionalInformation(props: { decrementTab: () => void }) {
  const [form, setForm] = createSignal<FormType>({ error: {}, field: {} })
  const [showModal, setShowModal] = createSignal(false)

  function validateForm(e: Event) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement))
    const res = safeParse(AdditionalInformationSchema, formData)

    if (res.success) {
      setForm({ error: {}, field: res.output })
      setShowModal(true)
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
    <>
      <Form class="mt-12" onSubmit={validateForm}>
        <Form.Heading>Additional Information</Form.Heading>
        <div class="space-y-4 my-8">
          <TextInput errorMessage={form().error.passportNumber} label="Passport Number" name="passportNumber" />
          <TextInput errorMessage={form().error.address} label="Address" name="address" />
          <TextInput errorMessage={form().error.city} label="City" name="city" />
          <TextInput errorMessage={form().error.zipCode} label="Zip Code" name="zipCode" type="number" />

          <Select
            errorMessage={form().error.travellingWithPets}
            label="Travelling with Pets"
            name="travellingWithPets"
            placeholder="Select an option"
            options={['Yes', 'No']}
          />
          <Select
            errorMessage={form().error.medicalConditions}
            label="Any Pre-Existing Medical Conditions"
            name="medicalConditions"
            placeholder="Select an option"
            options={['Yes', 'No']}
          />
          <Select
            errorMessage={form().error.specialRequests}
            label="Any Special Requirements or Requests"
            name="specialRequests"
            placeholder="Select an option"
            options={['Yes', 'No']}
          />
        </div>

        <div class="flex gap-4 font-medium text-sm">
          <Button class="flex gap-2 items-center" color="gray" onClick={props.decrementTab}>
            <ArrowIcon class="rotate-180" />
            Back
          </Button>
          <Button class="flex gap-2 items-center" color="red" type="submit">
            Get a Quote
            <ArrowIcon class="text-white" />
          </Button>
        </div>
      </Form>
      <AcknowledgementModal open={showModal()} onOpenChange={setShowModal} />
    </>
  )
}
