import { defaultImages } from '@/constants/images'

const formatDecimalToReal = (value: number | undefined): string => {
  if (!value) value = 0
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const filterProductsBySearchTerm = (
  products: app.Product[],
  searchTerm: string,
): app.Product[] => {
  if (searchTerm === '') return products

  return products.filter(
    (product) =>
      product?.name?.toUpperCase().includes(searchTerm.toUpperCase()),
  )
}

const getProductImage = (img: string | undefined) =>
  typeof img !== 'undefined' && img ? img : defaultImages.productNotFound

const getProductStock = (stock: number | undefined) =>
  typeof stock !== 'undefined' && stock ? stock : 0

export {
  formatDecimalToReal,
  filterProductsBySearchTerm,
  getProductImage,
  getProductStock,
}
