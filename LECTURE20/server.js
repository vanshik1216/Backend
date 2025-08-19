const express=require('express')
const {m1,m2}=require("./middleware/firstmiddleware")
const {m3,m4,m5}=require("./middleware/pathlevel")
const app=express();
const router=require("./route/userroute")
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(m1);
app.use("/api/users",router)
// app.use(m2);
//middleware-fn which run on client request before controller fn
//application level middleware(app.use(middleware))-- this will run on every client request
//middleware will run in the order it is called..
//next() or return  is not same --after next() call phle fun mein jo likha hoga vo resume hojega or run krega
app.get('/health',m3,(req,res,next)=>{
   console.log("running controller function")
//    next()
   return res.json({
    status:"ok",
    message:"server running ok"
   })
   console.log("after response")
})
app.use(m2);
app.get("/home",(req,res,next)=>{
    console.log("running home endpoint")
    res.json({
        success:true,
        message:"welcome to home page"
    })
})

app.listen(3000,()=>{
    console.log("server initiated");
})