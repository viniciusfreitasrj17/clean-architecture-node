import express, { Express } from 'express'
import { productRouter } from './routes/products.routes'
export const app: Express = express()

app.use(express.json())
app.use('/products', productRouter)
