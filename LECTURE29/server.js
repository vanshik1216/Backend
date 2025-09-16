const express=require('express')
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const {addUser,getUsers,getUser,updateUser,deleteUser,addTweet,findTweet,updateTweet,deleteTweet}=require("./Controller/index.js")
app.post('/addUser',addUser);
app.get('/getUsers',getUsers);
app.get('/getUser/:id',getUser);
app.put("/updateUser/:id",updateUser);
app.delete("/deleteUser/:id",deleteUser);
app.post('/addTweet',addTweet);
app.get("/findTweet/:userId",findTweet);
app.put("/updateTweet",updateTweet);
app.delete("/deleteTweet",deleteTweet);
app.listen(3000,()=>{
    console.log("Server started")
})