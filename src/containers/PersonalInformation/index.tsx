import { createSignal } from 'solid-js'
import { type Input, email, enumType, isoDate, length, maxLength, minLength, object, safeParse, string } from 'valibot'

import Button from '@components/Button'
import Form from '@components/Form'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import ArrowIcon from '@icons/ArrowIcon'

const PersonalInformationSchema = object({
  fullName: string([
    minLength(2, 'Should have atleast 2 characters'),
    maxLength(50, 'Cannot have more than 50 characters')
  ]),
  email: string([email('Invalid email address')]),
  phone: string([length(10, 'Invalid phone number')]),
  dob: string([isoDate()]),
  gender: enumType(['Man', 'Woman', 'Prefer not to say'], 'Invalid gender')
})

type FormKeys = keyof Input<typeof PersonalInformationSchema>

type FormType = {
  field: Partial<Record<FormKeys, string>>
  error: Partial<Record<FormKeys, string>>
}

export default function PersonalInformation(props: { incrementTab: () => void }) {
  const [form, setForm] = createSignal<FormType>({ error: {}, field: {} })

  function validateForm(e: Event) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement))
    const res = safeParse(PersonalInformationSchema, formData)

    if (res.success === false) {
      const newForm: FormType = { error: {}, field: {} }
      res.issues.forEach((issue) => {
        const key: FormKeys = Array.isArray(issue.path) ? issue.path[0]?.key : null
        newForm.error[key] = issue.message
        newForm.field = issue.input
      })
      setForm(newForm)
    } else {
      setForm({ error: {}, field: res.output })
      props.incrementTab()
    }
  }

  return (
    <Form class="mt-12" onSubmit={validateForm}>
      <Form.Heading>Personal Information</Form.Heading>

      <div class="space-y-4 my-8">
        <TextInput errorMessage={form().error.fullName} label="Full Name" name="fullName" />
        <TextInput errorMessage={form().error.email} label="E-mail Address" name="email" type="email" />
        <TextInput errorMessage={form().error.phone} label="Phone Number" name="phone" type="number" />
        <TextInput errorMessage={form().error.dob} label="Date of Birth" name="dob" type="date" />

        <Select
          errorMessage={form().error.gender}
          label="Gender"
          name="gender"
          placeholder="Select an option"
          options={['Man', 'Woman', 'Prefer not to say']}
        />
      </div>

      <div class="flex gap-4 font-medium text-sm">
        <Button class="flex gap-2 items-center" disabled color="gray">
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
