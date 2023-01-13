import { Router, Response, Request } from 'express'
import ProductRepository from '../../../database/product.repository'
import CreateProductUseCase from '../../../usecases/create-product/create-product.usecase'

export const productRouter = Router()

productRouter.post('/', async (req: Request, res: Response) => {
  const createProductUseCase = new CreateProductUseCase(
    new ProductRepository()
  )

  try {
    const input = {
      name: req.body.name,
      cost: req.body.cost,
    }
    const output = await createProductUseCase.execute(input)
    res.status(200).send(output)
  } catch (error) {
    res.status(500).send(error)
  }
})
