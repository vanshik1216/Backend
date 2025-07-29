
// //accesing dom element
// // 1.using id
// // 2 using class
// // 3 using tag
// // 3. using query selector
// let el1=document.getElementById('heading1')
// console.log(el1);
// let el2=document.getElementsByClassName('item')
// console.log(el2[0]);
// let el3=document.getElementsByTagName('p');
// console.log(el3)
// let el4=document.querySelector('p')
// console.log(el4)
// let el5=document.querySelector('.item')
// console.log(el5)
// let el6=document.querySelectorAll(".item")
// console.log(el6)
// //properties-to get and set values(getter and setter)
// // innertext---
// // innerhtml---
// // textcontent--
// //diff between innertext and textcontent
// let ul=document.querySelector("#container");
// // let data=el4.innerText;
// // console.log(data);
// el4.innerText="change using js";
// let data=el4.innerText;
// console.log(data);
// let data2=ul.innerHTML;
// let data3=ul.innerText;
// let data4=ul.textContent;
// console.log(data2)
// console.log(data3)
// console.log(data4)
// ul.innerHTML=`<li class="item">item4</li>
//         <li class="item">item5</li>
//         <li class="item">item6</li>`
// // getattribute
// // set attribute
// // classlist
// // console.dir(el5.getAttribute("id"))
// console.log(el5.getAttribute("class"))
// el5.setAttribute("id","js");
// console.dir(el5.getAttribute("id"))
// console.dir(el5.classList.contains("item"))
// el5.classList.add("new")
// console.dir(el5.classList)
// el5.classList.remove("cl1")
// console.dir(el5.classList)
let sign=document.querySelector('.Signup')
let form=document.querySelector('#form')
sign.addEventListener('click',function(){
    form.classList.toggle('hide');
})