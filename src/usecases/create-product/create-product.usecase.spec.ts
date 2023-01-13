import { CreateProductInputDto, CreateProductOutputDto } from "./create-product.dto"
import CreateProductUseCase from "./create-product.usecase"

// AAA - Unit Testing and the Arrange, Act and Assert (AAA) Pattern
describe('create product unit test', () => {
  it('should create a product', async () => {
    // input datas (Arrange)
    // execute usecase (Act)
    // output datas (Assert)

    // Arrange
    const input: CreateProductInputDto = {
      name: 'Product 1',
      cost: 100
    }
    const createProductUseCase = new CreateProductUseCase()

    // Act
    const result = await createProductUseCase.execute(input)

    // Assert
    const output: CreateProductOutputDto = {
      cost: 100,
      name: 'Product 1',
      salesPrice: 300,
      id: result.id
    }
    expect(result).toEqual(output)
  })
})
