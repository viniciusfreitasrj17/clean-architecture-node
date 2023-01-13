import Product from "../../entities/products";
import { CreateProductInputDto, CreateProductOutputDto } from "./create-product.dto";

export default class CreateProductUseCase {
  async execute(
    input: CreateProductInputDto
  ): Promise<CreateProductOutputDto> {
    const product = new Product(input.name)
    product.cost = input.cost

    return {
      id: product.id,
      cost: product.cost,
      name: product.name,
      salesPrice: product.salesPrice
    }
  }
}