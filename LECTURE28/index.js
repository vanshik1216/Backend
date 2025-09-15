const {PrismaClient}=require('./generated/prisma');
const prisma = new PrismaClient();
async function addUser(name,email,password){
await prisma.user.create({
    data:{
        name:name,
        email:email,
        password:password
    }
})
}
// addUser("g","v@gmail.com","123")
// .then(()=>{
//     console.log("User added successfully!!!")
// })
async function getAllUser(){
    let allUsers=await prisma.user.findMany();
    return allUsers;
}
getAllUser()
.then((data)=>{
    console.log(data)
})