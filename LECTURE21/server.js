const express = require('express')
const mongoose = require('mongoose')
const User = require("./model/users")
console.log(User)
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/health', (req, res) => {
    res.json({
        status: "ok",
        message: "server running ok"
    })
})
//endpoint for signup--meaning adding new user
app.post("/api/users/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let userexist = await User.findOne({ email: email })
        if (userexist) {
            return res.json({
                success: false,
                message: "User already exist with this email,Please Login"
            })
        }
        let newUser = new User({
            name: name,
            email: email,
            password: password
        })
        await newUser.save()
        return res.json({
            success: true,
            message: "User registered successfully ,please login to continue"
        })
    }
    catch (error) {
        console.log(error.message)
        res.json({
            error: {
                message: error.message
            }
        })
    }
})
app.post("/api/auth/login",async(req,res)=>{
    try{
    const {email,password}=req.body;
    let userexist=await User.findOne({email:email})
if(!userexist){
    return res.json({
        success:false,
        meassage:"User doesnt exist ,please signup"
    })
}
if(userexist.password!=password){
    return res.json({
        success:false,
        message:"Invalid Password!!!Please try again"
    })
}
if(userexist.password==password){
    res.json({
        success:true,
        message:"Login sunccesfully"
    })
}
    }
    catch(error){
        console.log(error)
        return res.json({
            error:{
              error: error.message
            }
        })
    }

})
app.listen(3000, () => {
    console.log("server started")
})
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log('Connected!'));