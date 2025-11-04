import { createClient } from "redis";
let client=createClient()

async function notify() {
    client.SUBSCRIBE("notify-me",(message)=>{
        console.log(message)
    })
}
setTimeout(()=>{
    notify()
},2000)
client.connect()
.then(()=>console.log("redis connected"))