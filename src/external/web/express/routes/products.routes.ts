import { Router, Response, Request } from 'express'
import { CreateProductController } from '../../../../infra/controllers/create-product.controller'
import ProductRepository from '../../../database/product.repository'
import CreateProductUseCase from '../../../../app/usecases/create-product/create-product.usecase'

export const productRouter = Router()

productRouter.post('/', async (req: Request, res: Response) => {
  const createProductController = new CreateProductController(
    new CreateProductUseCase(
      new ProductRepository()
    ) 
  )
  
  try {
    const input = {
      name: req.body.name,
      cost: req.body.cost,
    }
    
    const output = await createProductController.execute(input)

    res.status(200).send(output)
  } catch (error) {
    res.status(500).send(error)
  }
})
