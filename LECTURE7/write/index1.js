//array of object--list
let user=[
    { name:"Garg",
    age:18,
    address:"Kalka"
},
{ name:"Dhiman",
    age:21,
    address:"Pinjore"
}
]
const fs=require('fs');
//humare paas jo object haii agr hum object ko pass krte hai as a data we cant kyuki data argument hmara list kko allow ni krta thats why hmne use string m kia but string 
fs.writeFile("../users1.txt",JSON.stringify(user),function(err){
    if(err) return console.log(err)
        console.log("user written")
})