const math=require("./math")
//module mocking
jest.mock("./math")
/**
 *{
 * multiply:jest.fn(),
 * sub:jest.fn(),
 * modulo.fn()
 * }
 */
test("Multiplication of 2 and 3 is 6",()=>{
    math.multiply.mockReturnValueOnce(6)
    expect(math.multiply(2,3)).toBe(6)
})

test("Sub of 2 and 3 is -1",()=>{
    math.sub.mockReturnValueOnce(-1)
    expect(math.sub(2,3)).toBe(-1)
})
test("Modulo of 2 and 3 is 2",()=>{
    math.modulo.mockReturnValueOnce(2)
    expect(math.modulo(2,3)).toBe(2)
})