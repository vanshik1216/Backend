const express=require('express');
const mongoose=require("mongoose")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Blogs=require("./model/blog")
app.post("/blog",async(req,res)=>{
    let {title,body,userId}=req.body;
    // console.log(title,body);
    let userexist=await Users.findById(userId);
    if(userexist){
    let newblog=new Blogs({
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    })
  
   await newblog.save();
 userexist.blogs.push(newblog._id)
await userexist.save()
   res.json({
    success:true,
    data:newblog,
    message:"blog added successfully"
   })
  }
})
app.get('/blog',async(req,res)=>{
    let allblog= await Blogs.find();//return all data
    res.json({
        success:true,
        data:allblog
    })
})
app.get("/blog/:id",async(req,res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
})


  //hw -- ek schema bnao userschema (email,username,password) , user add krna hai route get all user ,single user get  
  const Users=require('./model/user');
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
        message:"Added"
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