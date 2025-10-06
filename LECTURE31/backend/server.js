const { WebSocketServer } = require('ws');
//yha hmne port 8080 select kra haii websocketserver is port p chlega
const ws = new WebSocketServer({ port: 8080 });

//app.get("/",(req,res)=>{})
//event -handler
//on use toh hear the event 
let allSocket=[]
ws.on("connection", function (socket) {
    console.log("User connected");

    socket.on("message",(message)=>{
      console.log("Message receieved",message.toString());
      if(message.toString()==='ping'){
      socket.send("pong")
      }
    })
})
//broadcasting 2 application 

// ws.on("connection", function (socket) {
//   console.log("User connected");
//   allSocket.push(socket)
//   socket.on("message",(message)=>{
//    for(let i=0;i<allSocket.length;i++){
//    allSocket[i].send(message.toString());
//    }
//   })
// })


