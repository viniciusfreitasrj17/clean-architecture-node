import Product from "../../domains/Product";
import ProductRepositoryProtocol from "../../app/usecases/create-product/product.protocol";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductRepositoryProtocol {
  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id,
      name: product.name,
      cost: product.cost,
      salesPrice: product.salesPrice,
    })
  }
}