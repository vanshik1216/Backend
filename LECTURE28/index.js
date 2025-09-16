const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
// async function addUser(name,email,password){
// await prisma.user.create({
//     data:{
//         name:name,
//         email:email,
//         password:password
//     }
// })
// }
// addUser("g","v@gmail.com","123")
// .then(()=>{
//     console.log("User added successfully!!!")
// })
// async function getAllUser(){
//     let allUsers=await prisma.user.findMany();
//     return allUsers;
// }
// getAllUser()
// .then((data)=>{
//     console.log(data)
// })
async function addData() {
    await prisma.user.createMany({
        data: [
            {
                name: "abc",
                email: "abc@gmail.com",
                password: "abc"
            },
            {
                name: "a",
                email: "a@gmail.com",
                password: "a"
            }
        ]
    })
}
// addData()
// .then(()=>{
//     console.log("data added")
// })
//getby unique identifier or id
//  async function get(){
//     return await  prisma.user.findUnique({
//         where:{
//             email:'v@gmail.com'
//         }
//     })
// }
// get()
// .then((data)=>{
//     console.log(data)
// })
//get all records
// async function getAll(){
//     let data=await prisma.user.findMany();
//     return data;
// }
// getAll()
// .then((data)=>{
//     console.log(data)
// })
//getting all data by filtering
// async function getBy (){
//    return await prisma.user.findMany({
//         where:{
//             password:{
//                 startsWith:"123"
//             }
//         }
//     })
// }
// getBy()
// .then((data)=>{
//     console.log(data)
// })
//findMany mein hum boht sare func use krskte hai where,select,skip ,take,include,orderBy
// async function getWhere(){
//     return await prisma.user.findMany({
//        where:{
//         name:{
//             contains:"v"
//         }
//        } 
//     })
// }
// getWhere()
// .then((data)=>{
//     console.log(data)
// })
// async function select(){
//    return await prisma.user.findMany({
//     select: {
//       id: true,
//       email: true
//     }
//   })
// }
// select()
// .then((data)=>{
//     console.log(data)
// })
//update -- to update single record
// async function update(){
//     await prisma.user.update({
//         where:{
//             email:"vg@gmail.com"
//         },
//         data:{
//             name:"vg"
//         }
//     })
// }
// update()
// .then(()=>{
//     console.log("Updated data succesfully")
// })
//update many
// async function updateMany(){
// await  prisma.user.updateMany({
//     where:{
//         email:{
//             contains:"v"
//         }
//     },
//     data:{
//         password:"new"
//     }
// })
// }updateMany()
//updatemany andreturn used to update the query and to return the resulting obj
 async function updatemany(){
    return await prisma.user.updateManyAndReturn({
        where: {
            email: {
                contains: "v"
            }
        },
        data: {
            password:"123"
        }
    })
}
updatemany()
.then((data)=>{
    console.log(data)
})

//upsert-- function used to update existing data and if it doesnt exist so create
// await prisma.user.upsert({
//     where: {
//       email: 'viola@prisma.io',
//     },
//     update: {
//       name: 'Viola the Magnificent',
//     },
//     create: {
//       email: 'viola@prisma.io',
//       name: 'Viola the Magnificent',
//     },
//   })
//delete for single record-- delete method
//multiple -deleteMany()
//byfilter--deleteMany({
// where})
//by deleet all data-- deleteMany({})