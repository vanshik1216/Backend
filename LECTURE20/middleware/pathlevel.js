function m3(req,res,next){
console.log("middleware3")
next();
}
function m4(req,res,next){
    console.log("middleware4")
    next();
}
function m5(req,res,next){
    console.log("middleware5")
    next();
}
module.exports.m3=m3;
module.exports.m4=m4;
module.exports.m5=m5;