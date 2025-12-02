function sum(a,b){
    if(!a||!b){
        return "all argument should be present"
    }
    else if(typeof(a)!="number"|| typeof(b)!="number"){
        return "all argument must be num"
    }
    return a+b;
}
// console.log(sum(2))
module.exports=sum;
