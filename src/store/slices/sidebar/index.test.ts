import { describe, expect, it } from 'vitest'
import { sidebar as reducer, setOpen } from './index'

describe('sidebar slice', () => {
  it('should set open state to true', () => {
    const state = reducer(
      {
        open: false,
      },
      setOpen(true),
    )

    expect(state.open).toEqual(true)
  })

  it('should set open state to true', () => {
    const state = reducer(
      {
        open: true,
      },
      setOpen(false),
    )

    expect(state.open).toEqual(false)
  })
})
