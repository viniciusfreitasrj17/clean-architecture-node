export interface CreateProductInputDto {
  name: string;
  cost: number;
}

export interface CreateProductOutputDto {
  id: number;
  name: string;
  cost: number;
  salesPrice: number;
}