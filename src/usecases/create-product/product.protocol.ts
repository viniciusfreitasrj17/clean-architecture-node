import Product from "../../entities/products";

export default interface ProductRepositoryProtocol {
  create(product: Product): Promise<void>;
}