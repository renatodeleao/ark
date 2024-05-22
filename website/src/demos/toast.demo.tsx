'use client'
import { Toaster, createToaster } from '@ark-ui/react/toast'
import { XIcon } from 'lucide-react'
import { Button, Toast } from '~/components/ui'

const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
})

export const Demo = () => (
  <>
    <Button
      variant="outline"
      onClick={() => toaster.create({ title: 'Title', description: 'Description', type: 'info' })}
    >
      Create Toast
    </Button>
    <Toaster toaster={toaster}>
      {(toast) => (
        <Toast.Root key={toast.id}>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>
            <XIcon />
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </Toaster>
  </>
)
