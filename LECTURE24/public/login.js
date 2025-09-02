const email=document.querySelector('#email')
const password=document.querySelector('#password')
const submit=document.querySelector('#submit')
submit.addEventListener('click',()=>{
    const emailvalue=email.value;
    const passwordvalue=password.value;
    login(emailvalue,passwordvalue,"http://localhost:3000/login")
})
function login(emailvalue,passwordvalue,URL){
    let data={
        email:emailvalue,
        password:passwordvalue
    }
    fetch(URL,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          }
    })
   .then((res)=>{
    return res.json()
   })
   .then((data)=>{
   if(data.success){
    alert(data.message)
   }
   else{
   alert(data.message)
   }
   })
   .catch((err)=>{
    console.log(err)
   })
}