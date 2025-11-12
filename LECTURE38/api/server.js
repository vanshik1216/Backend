const express=require('express')
const app=express()
app.use(express.json())
const orderRoute=require("./Routes/order")
app.use("/api/v1",orderRoute);

// console.log("hello")
app.get("/",(req,res)=>{
    console.log("hello")
})
app.listen(3000,()=>{
    console.log("Server started");
})