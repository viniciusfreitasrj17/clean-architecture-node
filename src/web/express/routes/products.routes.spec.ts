import request from 'supertest'
import { app } from '../app'
import { sequelize, setupDb } from '../../../database/setupDb'

setupDb()

describe('E2E product tests', () => {
  it('should create a product', async () => {
    await sequelize.sync({ force: true })
    // Arrange
    const input = {
      name: 'Product 1',
      cost: 100
    }

    // Act
    const response = await request(app).post('/products').send(input)

    // Assert
    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      id: response.body.id,
      name: 'Product 1',
      cost: 100,
      salesPrice: 300,
    })
    await sequelize.close()
  })

  it('should generate erro 500 when create a product', async () => {
    // Arrange
    const input = {
      name: 'Product 1',
      cost: 100
    }

    // Act
    const response = await request(app).post('/products').send(input)

    // Assert
    expect(response.status).toBe(500)
  })
})
