import Product from "../../../domains/Product";
import { CreateProductInputDto, CreateProductOutputDto } from "./create-product.dto";
import ProductRepositoryProtocol from './product.protocol'

export default class CreateProductUseCase {
  constructor(
    private _productRepositoryProtocol: ProductRepositoryProtocol
  ) {}

  async execute(
    input: CreateProductInputDto,
  ): Promise<CreateProductOutputDto> {
    const product = new Product(input.name)
    product.cost = input.cost

    await this._productRepositoryProtocol.create(product)

    return {
      id: product.id,
      cost: product.cost,
      name: product.name,
      salesPrice: product.salesPrice
    }
  }
}