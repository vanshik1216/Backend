const sum=require("./sum")

test("sum of 2 and 3 is 5",()=>{
    expect(sum(2,3)).toBe(5);
})
test("sum of '2' and 3 should return all argument must br number",()=>{
    expect(sum("2",3)).toBe("all argument must be num")
})
test("all argument must be passed",()=>{
    expect(sum(2)).toBe("all argument should be present")
})