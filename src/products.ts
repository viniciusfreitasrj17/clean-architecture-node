export default class Product {
  _name: string;
  _cost!: number;
  _id: number;

  constructor(name: string) {
    this._name = name
    this._id = Math.ceil(Math.random() * 10 ** 15)
  }

  get name() {
    return this._name
  }

  get cost() {
    return this._cost
  }

  set cost(cost:number) {
    if (cost < 0) {
      throw new Error("Cost cannot be negative")
    }
    this._cost = cost
  }

  get salesPrice() {
    return this._cost * 3
  }

  get id() {
    return this._id
  }
}