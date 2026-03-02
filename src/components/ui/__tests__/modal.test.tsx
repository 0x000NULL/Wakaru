// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Modal, ModalBody, ModalFooter } from '@/components/ui/modal'

describe('Modal', () => {
  it('renders children when open', () => {
    render(
      <Modal open onClose={() => {}}>
        <ModalBody>Modal content</ModalBody>
      </Modal>
    )
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(
      <Modal open={false} onClose={() => {}}>
        <ModalBody>Modal content</ModalBody>
      </Modal>
    )
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
  })

  it('calls onClose on backdrop click', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose}>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    const backdrop = document.querySelector('[aria-hidden="true"]')!
    await user.click(backdrop)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose}>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('respects closeOnBackdropClick={false}', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose} closeOnBackdropClick={false}>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    const backdrop = document.querySelector('[aria-hidden="true"]')!
    await user.click(backdrop)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('respects closeOnEscape={false}', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose} closeOnEscape={false}>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    await user.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('has correct ARIA attributes', () => {
    render(
      <Modal open onClose={() => {}} title="Test Title" description="Test description">
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby')
    expect(dialog).toHaveAttribute('aria-describedby')
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('applies size variant classes', () => {
    const { unmount } = render(
      <Modal open onClose={() => {}} size="sm">
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    expect(screen.getByRole('dialog')).toHaveClass('max-w-sm')
    unmount()

    render(
      <Modal open onClose={() => {}} size="lg">
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    expect(screen.getByRole('dialog')).toHaveClass('max-w-2xl')
  })

  it('renders ModalFooter with flex layout', () => {
    render(
      <Modal open onClose={() => {}}>
        <ModalFooter>
          <button>Cancel</button>
          <button>Save</button>
        </ModalFooter>
      </Modal>
    )
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('has a close button with aria-label', () => {
    render(
      <Modal open onClose={() => {}}>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    expect(screen.getByLabelText('Close')).toBeInTheDocument()
  })
})
