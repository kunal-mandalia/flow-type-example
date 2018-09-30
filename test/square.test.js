import { square } from '../src/square'

describe("square()", () => {
  it("should return the square of one number", () => {
    // assign
    const n = 2
    const expectedResult = 4
    // act
    const result = square(n)
    // assert
    expect(result).toEqual(expectedResult)
  })
})