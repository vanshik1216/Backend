const express =require('express')

const app = express()

app.get('/', (req, res) => {
//   res.send('Hello World')
//   res.sendFile("index.html")//to send file--relattive path cant send
// res.sendFile(__dirname+"/index.html")
res.json({
    Name:"Vanshika",
    age:19
})
})
//path variable
// 1) query paramter
app.get("/watch",(req,res)=>{
   let videoId= req.query.v;
   console.log(videoId)
    res.send("id got it"+" "+videoId+req.query.n)
})
// 2)params
app.get("/watch/:v/video/:n",(req,res)=>{
    res.send("got it !!!")
    console.log(req.params.v)
    console.log(req.params.n)
})
app.listen(3000,function(){
console.log("server started")
})//listen server starts