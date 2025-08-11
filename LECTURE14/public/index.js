let arr;
let lists = document.querySelector('.list');
function getUsersData(URL) {

    fetch(URL)
        .then((res) => {
            console.log(res)
            return res.json()//return promises

        })
        .then((data) => {
            arr = data;
            console.log(data)
            for (let i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                let d = arr[i].username;
                li.innerHTML = `
            <li>
            <div>
            ${d}
            </div>
            </li>`;
                lists.appendChild(li);
            }
        })
        .catch((err) => { console.log(err) })
}
getUsersData('http://localhost:3000/users')

function addUser(name,username,URL){
    let data={
        name:name,
        username:username
    }
    fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>
    console.log(data))
}
let regform=document.querySelector('.form');
let nameinp=document.querySelector('.name')
let usernameinp=document.querySelector('username')
regform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=nameinp.value;
    let username=usernameinp.value;
    addUser(name,username,"http://localhost:3000/adduser")
})
//fetch p do baar .then lgta haii


//hw--- user add frontend se 
