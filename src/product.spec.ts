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

  it('should set the cost of a product', () => {
    const product = new Product('Product 1')
    product.cost = 100
    expect(product.cost).toBe(100)
  })
  
  it('should set the salesPrice by 3 times the cost os the product', () => {
    const product = new Product('Product 1')
    product.cost = 100
    expect(product.salesPrice).toBe(300)
  })
  
})