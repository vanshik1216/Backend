
let users=[
    {
        id:1,
        name:"Vanshika",
        age:19
    },
    {
        id:2,
        name:"garg",
        age:20
    }
]
// function isAllowed(id){
//     //filter rurn new array
//     //id ka user dhundo fir uska age check kro >18
//     let isid=users.filter((i)=>i.id==id)[0]
//     // return isid;
//     if(!isid){
//         return console.log("no user found")
//     }
//     if(isid.age<18)return console.log("Not eligible to vote")
//         return console.log("eligible to vote")
// }
function isAllowed(id){
    //filter rurn new array
    //id ka user dhundo fir uska age check kro >18
    return new Promise((resolve,reject)=>{
        let isid=users.filter((i)=>i.id==id)[0]
        console.log(isid);
        // return isid;
        if(!isid){
            return reject("no user found")
        }
        if(isid.age<18)return reject("Not eligible to vote")
            return resolve("eligible to vote")
    })
    
}
isAllowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("start")
console.log("sum 2 number")