import Product from "../../../domains/Product";

export default interface ProductRepositoryProtocol {
  create(product: Product): Promise<void>;
}