import Product from "./products"

describe('products unit test', () => {
  it('should have a name', () => {
    const name = 'Product 1'
    const product = new Product(name)
    expect(product.name).toBe(name)
  })
})