const express=require('express')
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.send("hello")
})
app.post("/blog",(req,res)=>{
    console.log(req.body)
    let title=req.body.title;
    let description=req.body.description;
    console.log(title,description);
    res.json({
        success:true,
        message:"blog added "
    })
})
app.listen(3000,()=>{
    console.log("server started")
})