export default class Hex {
  decimal!: number

  constructor(decimal: number) {
    this.decimal = decimal
  }
  static parse(hex: string) {
    return parseInt(hex, 16)
  }
  private static parseHex(decimal: number): string {
    return `0x${decimal.toString(16).toUpperCase()}`
  }

  minus(amount: number) {
    this.decimal -= amount
    return this
  }
  plus(amount: number) {
    this.decimal += amount
    return this
  }
  toString() {
    return Hex.parseHex(this.decimal)
  }
  toJSON() {
    return JSON.stringify(this.toString())
  }
  valueOf() {
    return this.decimal
  }
}
