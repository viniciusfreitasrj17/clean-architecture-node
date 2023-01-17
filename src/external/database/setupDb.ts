import { Sequelize } from 'sequelize-typescript'
import ProductModel from './product.model'

export let sequelize: Sequelize

export async function setupDb() {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  })

  sequelize.addModels([
    ProductModel,
  ])
  await sequelize.sync()
}