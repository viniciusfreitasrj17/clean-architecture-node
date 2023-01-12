import Product from "./products"

describe('products unit test', () => {
  it('should have a name', () => {
    const name = 'Product 1'
    const product = new Product(name)
    expect(product.name).toBe(name)
  })

  it('should throw an error if cost is negative', () => {
    const product = new Product('Product 1')
    expect(() => {
      product.cost = -1
    }).toThrowError('Cost cannot be negative')
  })
})