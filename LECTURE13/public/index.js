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


//fetch p do baar .then lgta haii


//hw--- user add frontend se 
