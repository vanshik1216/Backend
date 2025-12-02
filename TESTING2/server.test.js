const user=require("./model/user.model")
const request=require("supertest")
const app=require("./server")
jest.mock("./model/user.model")
describe("POST /api/users/register",()=>{
    it("should return user already exist if email is v@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(true)
        let response=await request(app).post("/api/users/register").send({
            name:"Vanshika",
            email:"v@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("User already exists")
    })
    it("should create a new user with email vanshika@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(false)
        user.create.mockResolvedValueOnce({
            name:"vanshika",
            email:"vanshika@gamil.com"
            ,password:"123"
        })
        let response=await request(app).post("/api/users/register").send({
            name:"vanshika",
            email:"vanshika@gmail.com",
            password:"123"
        })
        expect(response.body.message).toBe("user register successfully")
        expect(response.body.data).toEqual({
            name:"vanshika",
            email:"vanshika@gamil.com"
            ,password:"123"
        })
    })
})