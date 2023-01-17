import CreateProductUseCase from "../../app/usecases/create-product/create-product.usecase"
import { RequestProtocol, ResponseProtocol } from "./controller.protocol"

export class CreateProductController {
  constructor(
    private _createProductUseCase: CreateProductUseCase,
  ) {}

  public async execute(req: RequestProtocol, res: ResponseProtocol) {
    try {
      const input = {
        name: req.body.name,
        cost: req.body.cost,
      }

      const output = await this._createProductUseCase.execute(input)

      res.status(200).send(output)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}