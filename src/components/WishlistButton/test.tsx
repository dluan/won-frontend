import { render } from '@testing-library/react'

import WishlistButton from '.'

describe('<WishlistButton/>', () => {
  it('should render the reading', () => {
    const { container } = render(<WishlistButton />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
