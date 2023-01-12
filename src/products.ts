export default class Product {
  _name: string;
  _cost!: number;

  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  set cost(cost:number) {
    if (cost < 0) {
      throw new Error("Cost cannot be negative")
    }
    this._cost = cost
  }
}