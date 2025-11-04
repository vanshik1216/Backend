import { createClient } from "redis";
let client=createClient()

async function notify(){
    await client.PUBLISH("notify-me",JSON.stringify({
        id:1,
        message:"iphone back in stock"
    }))
}
setTimeout(()=>{
    notify()
},2000)

client.connect()
.then(()=>console.log("redis connected"))