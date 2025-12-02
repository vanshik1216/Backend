const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const user=require("./model/user.model")
app.post("/api/users/register",async(req,res)=>{
    let {name,email,password}=req.body;
    let userExist=await user.findOne({email})//mock
    if(userExist){
        return res.json({
            success:true,
            message:"User already exists"
        })
    }
    let newUser=await user.create({ //mock
        name,email,password
    })
  
    res.json({
        succes:true,
        message:"user register successfully",
        data:newUser
    });

})
module.exports=app;