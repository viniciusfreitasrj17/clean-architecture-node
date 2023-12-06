import { Router } from 'express'
import { CreateProductController } from '../../../../infra/controllers/create-product.controller'
import ProductRepository from '../../../database/product.repository'
import CreateProductUseCase from '../../../../app/usecases/create-product/create-product.usecase'

export const productRouter = Router()

const createProductController = new CreateProductController(
  new CreateProductUseCase(
    new ProductRepository()
  )
)

productRouter.post('/', async (req, res) =>  
  createProductController.execute(req, res)
)

productRouter.get('/', async (req, res) =>  
  {
    return res.json({ "message": "OK" }).status(200)
  }
)
