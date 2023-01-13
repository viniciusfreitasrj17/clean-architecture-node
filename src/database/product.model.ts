import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({ tableName: 'products', timestamps: false })
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  cost!: number;

  @Column
  salesPrice!: number;
}