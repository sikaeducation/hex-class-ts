const { Hex } = require("./index")

describe("Hex", () => {
  describe("#toString", () => {
    it("generates a string", () => {
      const FF = new Hex(255)

      expect(FF.toString()).toEqual("0xFF")
    })
  })
  describe("#new", () => {
    it("evaluates to a decimal", () => {
      const FF = new Hex(255)

      expect(FF + 1).toEqual(256)
    })
  })
  describe("#toJSON", () => {
    it("generates JSON string", () => {
      const FF = new Hex(255)

      expect(FF.toJSON()).toEqual("0xFF")
    })
  })
  describe("#minus", () => {
    it("subtracts decimals", () => {
      const FF = new Hex(255)

      expect(FF.minus(1).toString()).toEqual("0xFE")
    })
    it("subtracts instances", () => {
      const FF = new Hex(255)

      expect(FF.minus(FF).valueOf()).toEqual(0)
    })
  })
  describe("#plus", () => {
    it("adds decimals", () => {
      const hex = new Hex(10)

      expect(hex.plus(5).toString()).toEqual("0xF")
    })
  })
  describe(".parse", () => {
    it("parses hex to decimal - unprefixed", () => {
      expect(Hex.parse("FF")).toEqual(255)
    })
    it("parses hex to decimal - prefixed", () => {
      expect(Hex.parse("0xFF")).toEqual(255)
    })
  })
})
