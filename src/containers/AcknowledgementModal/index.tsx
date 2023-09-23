import Modal from '@components/Modal'

export default function AcknowledgementModal(props: { open: boolean; onOpenChange: (val: boolean) => void }) {
  return (
    <Modal open={props.open} onOpenChange={props.onOpenChange}>
      <Modal.Content title="Acknowledgment">
        <p class="mt-8">
          Thank you for taking the time to complete this form. This project is for demonstration purpose only and does
          not perform actual data processing.
        </p>
      </Modal.Content>
    </Modal>
  )
}
