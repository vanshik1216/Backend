//task is to take input from form and do same like creating that we had done by adding new element 
let title=document.getElementById('title');
let button=document.querySelector('#btn')

let list=document.querySelector('.lists')
function addtodo(){
let li=document.createElement('li');
li.innerHTML=

`
<div>
            <h1>${title.value} </h1>
            <div>
                <button class="delete">❌</button>
                <button>🖊️</button>
            </div>
        </div>
       `
list.appendChild(li);
title.value="";
let del=document.querySelector('.delete');
del.addEventListener('click',()=>{
list.remove();
})

}
button.addEventListener('click',(e)=>{

addtodo();
})
