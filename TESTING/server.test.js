const app=require("./server")
const request=require("supertest");
describe("POST/sum",()=>{
    test("should return addition o two number",async()=>{
      let response=await  request(app).post("/sum").send({
            a:2,
            b:3
        })
        expect(response.body.data).toBe(5)
    })
    it("should return all argument must be passed",async()=>{
        let response=await request(app).post("/sum").send({
            a:2,
        })
        expect(response.body.message).toBe(
           "invalid argument"
        )
    })
})