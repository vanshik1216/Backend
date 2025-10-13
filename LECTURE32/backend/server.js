const { WebSocketServer } = require('ws');
//yha hmne port 8080 select kra haii websocketserver is port p chlega
const ws = new WebSocketServer({ port: 8080 });
const  { v4 : uuidv4 } =require('uuid') ;
//app.get("/",(req,res)=>{})
//event -handler
//on use toh hear the event 
// let allSocket=[]
// ws.on("connection", function (socket) {
//     console.log("User connected");

//     socket.on("message",(message)=>{
//       console.log("Message receieved",message.toString());
//       if(message.toString()==='ping'){
//       socket.send("pong")
//       }
//     })
// })
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
let rooms = new Map();

ws.on("connection", (socket) => {
  console.log("new user connected");
  socket.on("message", (message) => {
    const parseMessage = JSON.parse(message)
    let { type, payload } = parseMessage;
    if (type == "join") {
      let { roomId } = payload
      if (!rooms.get(roomId)) {
        rooms.set(roomId, new Set());
      }
      rooms.get(roomId).add(socket);
      console.log(rooms)
      socket.roomId=roomId
      socket.send("added to room")
    }
    else if(type==="chat"){
      let {message}=payload;
      let {roomId}=socket
      let allClient=rooms.get(roomId)
      allClient.forEach(s=>{
        s.send(message.toString())
      })
      
    }
    else if(type==="create"){
      let roomId=uuidv4();
      socket.send(JSON.stringify({
        type:"create",
        payload:{
          roomId:roomId       
        }
      }))
    }
  })
})