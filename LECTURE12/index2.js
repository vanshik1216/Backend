//to add new element in ahtml by js
// 1) create a new Element using createElement func
// 2) insert require data in that elememet using innertext innerhtml
// 3.)insert new elemnt in parent container using appendchild or append
let todocontainer=document.querySelector('.todocontainer')
let todos=[
    {
            id:234234,
            title:"study at 9pm"
        },
        {
            id:234234544,
            title:"play at 6pm"
        }

]
function add(todo){
    let li=document.createElement('li');
    li.innerHTML=`<div>
            <input type="checkbox" name="" id=""> 
            <h1>${todo.title} </h1>
            <div>
                <button>❌</button>
                <button>🖊️</button>
            </div>
        </div>`
    todocontainer.appendChild(li);
}
// let todo={
//     id:234234,
//     title:"study at 9pm"
// }
// add(todo);
function showall(todos){
    for(let i=0;i<todos.length;i++){
        add(todos[i]);
    }
}
showall(todos)