 let sum=jest.fn(); //fn--used for function mocking-- create new func
//  by default sum will return undefined
// sum.mockReturnValue(5)
sum.mockReturnValueOnce(5)
 test("sum of 2 and 3 is 5",()=>{
    expect(sum(2,3)).toBe(5)
 })
 test("sum of 2 and 3 is 5",()=>{
   sum.mockReturnValueOnce(7)
    expect(sum(4,3)).toBe(7)
 })