import Button from '@components/Button'
import Form from '@components/Form'
import TextInput from '@components/TextInput'
import ArrowIcon from '@icons/ArrowIcon'

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

      <div class="flex gap-4 font-medium text-sm">
        <Button classList={{ 'flex gap-2 items-center': true }} color="gray">
          <ArrowIcon classList={{ 'rotate-180': true }} />
          Back
        </Button>
        <Button classList={{ 'flex gap-2 items-center': true }}>
          Next
          <ArrowIcon classList={{ 'text-white': true }} />
        </Button>
      </div>
    </Form>
  )
}
