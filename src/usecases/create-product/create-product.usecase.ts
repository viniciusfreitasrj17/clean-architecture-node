import Product from "../../entities/products";
import { CreateProductInputDto, CreateProductOutputDto } from "./create-product.dto";
import ProductGateway from '../../gateways/product.gateway'

export default class CreateProductUseCase {
  constructor(
    private _productGateway: ProductGateway
  ) {}

  async execute(
    input: CreateProductInputDto,
  ): Promise<CreateProductOutputDto> {
    const product = new Product(input.name)
    product.cost = input.cost

    await this._productGateway.create(product)

    return {
      id: product.id,
      cost: product.cost,
      name: product.name,
      salesPrice: product.salesPrice
    }
  }
}