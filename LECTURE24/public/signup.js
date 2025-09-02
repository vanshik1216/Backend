// const user = require("../model/user")

const username=document.querySelector('#username')
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const submit=document.querySelector("#submit")
submit.addEventListener("click",()=>{
   const namevalue=username.value
   const emailvalue=email.value
   const passwordvalue=password.value
   addUser(namevalue,emailvalue,passwordvalue,"http://localhost:3000/user")
})
function addUser(namevalue,emailvalue,passwordvalue,URL){
    let data={
        username:namevalue,
        email:emailvalue,
        password:passwordvalue
    }
    fetch(URL,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
          }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.success){
            // console.log(data)
            alert(data.data.username+" "+data.message)
        }
        else{
            alert(data.message)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}