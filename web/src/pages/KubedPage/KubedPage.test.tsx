import { render } from '@redwoodjs/testing/web'

import KubedPage from './KubedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KubedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KubedPage />)
    }).not.toThrow()
  })
})
