import { describe, expect, it } from 'vitest'
import { search as reducer, setSearch } from './index'

const searchExample = 'product'
const exampleState = {
  searchTerm: '',
}

describe('search slice', () => {
  it('should set a search term', () => {
    const state = reducer(exampleState, setSearch(searchExample))

    expect(state.searchTerm).toEqual(searchExample)
  })
})
