import { render } from '@redwoodjs/testing/web'

import MyPage2Page from './MyPage2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyPage2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyPage2Page />)
    }).not.toThrow()
  })
})
