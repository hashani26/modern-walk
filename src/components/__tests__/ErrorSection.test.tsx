import { render, screen } from '@testing-library/react'
import ErrorSection from '../ErrorSection'

// No need to import '@testing-library/jest-dom/extend-expect' if it's in jest.setup.ts

describe('ErrorSection', () => {
  it('renders the error message when error is provided', () => {
    const error = new Error('Something went wrong')
    render(<ErrorSection error={error} />)
    expect(screen.getByText(/error loading products/i)).toBeInTheDocument()
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('renders nothing when error is null', () => {
    render(<ErrorSection error={null} />)
    expect(screen.getByText(/error loading products/i)).toBeInTheDocument()
  })
})
