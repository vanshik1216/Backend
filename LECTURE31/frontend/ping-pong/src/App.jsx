import { useEffect, useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//App--component
function App() {
  let [ws,setWs]=useState(null)//to create state variable 
  let  inputRef=useRef()
  useEffect(()=>{//used to do sideffect in react
    const socket=new WebSocket("ws://localhost:8080");
    socket.onmessage=((e)=>{
      console.log(e.data)
    })
    setWs(socket);
  },[])
  function sendMessage(){
    let msg=inputRef.current.value
    ws.send(msg);
  }
  return (
    <>
    <h1>Ping-Pong</h1>
<input type="text" ref={inputRef}/>\
<button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
