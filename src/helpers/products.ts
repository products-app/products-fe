const formatDecimalToReal = (value: number): string => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const filterProductsBySearchTerm = (
  products: app.Product[],
  searchTerm: string,
): app.Product[] => {
  if (searchTerm === '') return products

  return products.filter((product) => product.name.includes(searchTerm))
}

export { formatDecimalToReal, filterProductsBySearchTerm }
