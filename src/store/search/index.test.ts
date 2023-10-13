import { useSearchStore as store } from './index'

const exampleState = {
  searchTerm: '',
}

const initialState = store.getState()

describe('search store', () => {
  beforeEach(() => {
    store.setState({ ...initialState, ...exampleState })
  })

  it('should add a new product', () => {
    const { setSearch } = store.getState()
    setSearch('test')
    const { searchTerm } = store.getState()

    expect(searchTerm).toEqual('test')
  })
})
