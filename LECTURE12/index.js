const btn=document.getElementById('btn');
let  place=document.getElementById('box');
let intervalid=null
function random(number){
    return Math.floor(Math.random()*(number+1));
}
btn.addEventListener('click',function(e){
    intervalid=setInterval(()=>{
    const color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    // document.getElementById('box').style.backgroundColor=color;
    place.style.backgroundColor=color;
    },500)
})
let stop=document.getElementById('stop');
stop.addEventListener("click",function(){
 if(intervalid){
    clearInterval(intervalid);
 }
})
