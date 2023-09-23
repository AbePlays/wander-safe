import { Dialog as KobalteDialog } from '@kobalte/core'
import type { JSX } from 'solid-js'

import CrossIcon from '@icons/CrossIcon'

function Modal(props: KobalteDialog.DialogRootProps) {
  return <KobalteDialog.Root {...props} />
}

function ModalContent(props: { title: string; children: JSX.Element }) {
  return (
    <KobalteDialog.Portal>
      <KobalteDialog.Overlay class="z-10 fixed inset-0 bg-black/50 dark:bg-black/70 data-[expanded]:animate-[overlay-show_300ms] data-[closed]:animate-[overlay-hide_300ms]" />
      <KobalteDialog.Content class="z-20 fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-md p-8 shadow data-[expanded]:animate-[dialog-show_300ms] data-[closed]:animate-[dialog-hide_300ms] text-gray-600">
        <div class="flex items-center justify-between gap-4">
          <KobalteDialog.Title class="text-xl text-black font-medium">{props.title}</KobalteDialog.Title>
          <KobalteDialog.CloseButton class="hover:text-gray-700 focus-visible:ring-2 outline-none rounded-full ring-gray-600 ring-offset-2">
            <CrossIcon />
          </KobalteDialog.CloseButton>
        </div>
        {props.children}
      </KobalteDialog.Content>
    </KobalteDialog.Portal>
  )
}

Modal.Button = KobalteDialog.Trigger
Modal.Content = ModalContent

export default Modal
