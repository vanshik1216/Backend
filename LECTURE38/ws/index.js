const {WebSocketServer}=require('ws')
let { subscriber}=require('../shared/index')
const wss=new WebSocketServer({port:8080});
let allSocket=[];
wss.on("connection",(socket)=>{
    console.log("user connected")
   
    allSocket.push(socket)
    (async function orderbookUpdate(){
        await subscriber.connect();
  subscriber.subscribe("bookupdate",(message)=>{
         //broadcasting
         let parsedMessage=JSON.parse(message)
         console.log(parsedMessage)
         })
     })()//IIFE--immediately invoking function
})
// (async function orderbookUpdate(){
//    await subscriber.subscribe("bookupdate",(message)=>{
//     //broadcasting
//     let parsedMessage=JSON.parse(message)
//     console.log(parsedMessage)
//     })
// })()//IIFE--immediately invoking function
function broadcast(){
    allSocket.forEach((s)=>{
        s.send(message)
    })
}