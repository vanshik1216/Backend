// let p=new Promise((resolve,reject)=>{
//      resolve("wada pura kiya")
// })
// // console.log(p);
// p.then((data)=>{
// console.log(data)
// })
// .catch((err)=>{
// console.log(err)
// })
let product=[{
    name:"samsung" ,
    amount:70000, 
    quantity:10
}
,
{
    name:"Iphone 16" ,
    amount:100000, 
    quantity:2
}]
function buyProductPromise(product_Name) {
    return new Promise((resolve, reject) => {
        let isProduct = product.filter((p) => p.name == product_Name)[0];
        
        if (!isProduct) {
            return reject("Product is not available");
        }

        resolve(isProduct.amount);
    });
}

//hw to execute deductedamount operation in promise 
let availableamount=200000
function deductbankamount(amount){
//do some transaction
return new Promise((resolve,reject)=>{
    if(amount>availableamount){
        return reject("bankbalance is low")
     
     }
     else{
        availableamount-=amount;
       
        resolve("amount deducted")
     //    cb(null,"amount deducted")
     }
})


}
//promise chaining-- to execute multiple promises in synchronous way
// buyProductPromise("Iphone 16").then((amount) => deductbankamount(amount))
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
async function domytask() {
    

try{
    let amount=await buyProductPromise("Iphone 16");
    let mes=await deductbankamount(amount);
    console.log(mes)
}
catch(error){
console.log(error)
}
}
console.log(domytask());
console.log("start")
