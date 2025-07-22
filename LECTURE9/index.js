const express=require('express');
const fs=require('fs')
const app=express();
app.use(express.json());//to parse json data
app.get('/',(req,res)=>{
    console.log("hello vanshika")
})
app.listen(3000,function(){
    console.log("server start");
})
app.post('/hello',(req,res)=>{
    console.log(req.body);
   let {userid,username}=req.body;
//    res.json({userid,username})
   let userdata={userid,username};
   fs.readFile("a.txt","utf-8",function(err,data){
    let arr=[];
    if(!err&&data!=""){
        arr=JSON.parse(data);
    }
    arr.push(userdata);
    fs.writeFile("a.txt",JSON.stringify(arr),function(err,data){
        if(err)return res.send(err)
            res.send("data added")
           })
   })
  
})