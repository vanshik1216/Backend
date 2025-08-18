const express=require('express');
const mongoose=require("mongoose");
const userRoutes=require("./routes/usersRoutes");
const  blogRoutes=require("./routes/blogsRoutes");
// const Blogs=require("./model/blog")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/blog",blogRoutes);

app.use("/api/user",userRoutes);
// const Blogs=require("./model/blog")



  //hw -- ek schema bnao userschema (email,username,password) , user add krna hai route get all user ,single user get  
  // const Users=require('./model/user');
  


mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
.then(() => console.log('Connected!'));


app.listen(3000,()=>{
  console.log("Server started");
})
  
  // mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  // .then(() => console.log('Connected!'));