import { Sequelize } from "sequelize-typescript"
import Product from "../entities/products"
import ProductModel from "./product.model"
import ProductRepository from "./product.repository"

describe('products repository integration test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    })

    sequelize.addModels([
      ProductModel,
    ])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })
  
  it('should create a product', async () => {
    const repository = new ProductRepository()
    const product = new Product('Product 1')
    product.cost = 100
    repository.create(product)

    const result = await ProductModel.findOne({ where: { id: product.id } })

    expect(result).toBeDefined()
    expect(result?.id).toBe(product.id)
    expect(result?.name).toBe('Product 1')
    expect(result?.cost).toBe(100)
    expect(result?.salesPrice).toBe(300)
  })
})
