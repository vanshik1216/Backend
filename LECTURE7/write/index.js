//array of object--list
let users=[
    { name:"Vanshika",
    age:19,
    address:"Pinjore"
},
{ name:"Saloni",
    age:20,
    address:"Kalka"
}
]
const fs=require('fs');
//humare paas jo object haii agr hum object ko pass krte hai as a data we cant kyuki data argument hmara list kko allow ni krta thats why hmne use string m kia but string 
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err)
        console.log("users written")
})