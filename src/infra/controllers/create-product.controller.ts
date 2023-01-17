import CreateProductUseCase from "../../app/usecases/create-product/create-product.usecase"
import { CreateProductInputDto } from "../../app/usecases/create-product/create-product.dto"

export class CreateProductController {
  constructor(
    private _createProductUseCase: CreateProductUseCase,
  ) {}

  public async execute(input: CreateProductInputDto) {
    return this._createProductUseCase.execute(input)
  }
}