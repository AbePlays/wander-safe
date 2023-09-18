import Form from '@components/Form'
import TextInput from '@components/TextInput'

export default function PersonalInformation() {
  return (
    <Form classList={{ 'mt-12': true }}>
      <Form.Heading>Personal Information</Form.Heading>

      <div class="space-y-4 my-8">
        <TextInput label="Full Name" />
        <TextInput label="E-mail Address" type="email" />
        <TextInput label="Phone Number" type="number" />
        <TextInput label="Date of Birth" type="date" />
        <TextInput label="Gender" />
      </div>
    </Form>
  )
}
