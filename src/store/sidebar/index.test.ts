import { beforeEach, describe, expect, it } from 'vitest'
import { useSidebarStore as store } from './index'

const exampleState = {
  open: false,
}

const initialState = store.getState()

describe('sidebar store', () => {
  beforeEach(() => {
    store.setState({ ...initialState, ...exampleState })
  })

  it('should add a new product', () => {
    const { setOpen } = store.getState()
    setOpen(true)
    const { open } = store.getState()

    expect(open).toEqual(true)
  })
})
