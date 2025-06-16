import { render, screen } from '@testing-library/react'
import Header from '../Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders the header with the correct text', () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', { name: /modern walk/i })
    ).toBeInTheDocument()
  })

  it('renders a link to the home page', () => {
    render(<Header />)
    const link = screen.getByRole('link', { name: /modern walk/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
