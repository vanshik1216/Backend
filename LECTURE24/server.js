const express=require('express');
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken");
const path=require("path");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname+"/public"))
const Blogs=require("./model/blog")
const Users=require('./model/user');
const {islogin}=require("./middleware/login");


app.post("/login",async(req,res)=>{
  try{
  const {email,password}=req.body;
  let Userexist=await Users.findOne({email:email})
  if(!Userexist){
    return res.json({
      success:false,
      message:"User doesn't exist please login"
    })
  }
  if(password!==Userexist.password){
    return res.json({
      success:false,
      message:"Incorrect Password"
    })
  }
  let token =jwt.sign({"userid":Userexist._id},"secret");
  return res.json({
    success:true,
    message:"User login successfully",
    token:token
  })
  }
catch(err){
  console.log(err)
  return res.json({
    error:{
      error: err.message
    }
})
}
})
//add blog
app.post("/blog",islogin,async(req,res)=>{
    let {title,body}=req.body;
    const userId=req.userid;
    console.log(userId)
    // console.log(title,body);
    let userexist=await Users.findById(userId);
    if(userexist){
    let newblog=new Blogs({
        title:title,
        body:body,
        date:Date.now(),
        userId:req.userId
    })
  
   await newblog.save();
 userexist.blogs.push(newblog._id)
await userexist.save()
   return res.json({
    success:true,
    data:newblog,
    message:"blog added successfully"
   })
  }
  res.json({
    success:false,
    message:"user does not exist"
  })
})
//getting all blogs
app.get('/blog',async(req,res)=>{
    let allblog= await Blogs.find();//return all data
    res.json({
        success:true,
        data:allblog
    })
})
//getting specific blog
app.get("/blog/:id",async(req,res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
})


  //hw -- ek schema bnao userschema (email,username,password) , user add krna hai route get all user ,single user get  

  app.post('/user',async(req,res)=>{
    let{username,email,password}=req.body;
    let userdata= new Users({
        username:username,
        email:email,
        password:password
    })
    await userdata.save();
    res.json({
        success:true,
        data:userdata,
        message:"User added successfully"
    })
  })
  app.get('/user',async(req,res)=>{
    let data=await Users.find()
    res.json({
        success:true,
        data:data,
        message:"data get"
    })
  })
app.get("/user/:id",async(req,res)=>{
    let {id}=req.params;
    let users=await Users.findOne({_id:id}).populate("blogs");
    if(users){
    res.json({
        success:true,
        data:users
    })
  }
})
 
app.delete("/blog/:blogId",async(req,res)=>{
  let {blogId}=req.params;
  let {userId}=req.body;
  let blogexist=await Blogs.findById(blogId);
if(!blogexist)
  return res.json({
    success:false,
  message:"blog doesnt exist"
  })

if(blogexist.userId!=userId)
  res.json({
    success:false,
    message:"you are not allowed to delete this blog"
  })
  await Blogs.findByIdAndDelete(blogId);
  let userExist=await Users.findById(userId);
  let blog=userExist.blogs.filter((id) => id!=blogId)
  userExist.blogs=blog;  
  await userExist.save();
  res.json({
    success:true,
    message:"blog deleted",
    data:userExist
  })
})
app.put("/blog/:blogId",async(req,res)=>{
let {blogId}=req.params;
let { userId, title, body } = req.body;

let blogexist=await Blogs.findById(blogId);
if(!blogexist)
  return res.json({
    success:false,
  message:"blog doesnt exist"
  })
  if(blogexist.userId!=userId)
    return res.json({
      success:false,
      message:"you are not allowed to delete this blog"
    })
  let update=await Blogs.findByIdAndUpdate(blogId,{title,body})
  // await Blogs.save();
  return res.json({
    success:true,
    message:"updated",
data:update
  })
})
app.listen(3000,()=>{
  console.log("Server started");
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
.then(() => console.log('Connected!'));
  
  // mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  // .then(() => console.log('Connected!'));