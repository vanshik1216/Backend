import { createClient } from "redis";
const client=await createClient()
client.connect()
client.on("error", (err) => console.log("Redis Client Error", err))
async function cacheUserProfile(){
    await client.set("user:2",JSON.stringify({
        name:"Garg",
        age:"19"
    }));
}
async function readProfile(){
   let data=await client.get("user:2")
   return data
}
// cacheUserProfile().then(()=>{
// console.log("Profile cached")
// })
readProfile().then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})