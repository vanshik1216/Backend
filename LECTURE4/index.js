let product=[{
    name:"samsung" ,
    amount:70000, 
    quantity:10
}
,
{
    name:"Iphone 16" ,
    amount:100000, 
    quantity:0   
}]
function buyProduct(product_Name,cb){
    //do some asunchronous operation
   
        //all operation completed
        // console.log("all the I/o is completed and order details are saved.")
        // cb();
        let isProduct=product.filter((p)=>p.name==product_Name)[0];
        // console.log(isProduct)
    if(!isProduct){
       return  cb("product is not available",null)
    }
    cb(null,isProduct.amount);

}
let availableamount=200000
function deductbankamount(amount,cb){
//do some transaction
if(amount>availableamount){
   return cb("bankbalance is low",null)

}
else{
   availableamount-=amount;
   console.log(availableamount); 
   cb(null,"amount deducted")
//    cb(null,"amount deducted")
}

}
buyProduct("Iphone 16",function(err,amount){
    if(err)return console.log(err);
    console.log(amount);
    deductbankamount(amount,function(err,message){
        if(err) return console.log(err)
        console.log(message);
    })
})
const fs=require("fs");
fs.readFile("filepath","utf-8",(err,data)=>{
    
})