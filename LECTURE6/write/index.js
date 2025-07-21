const fs=require("fs")
//file ,data,callback
fs.writeFile("../demo.txt","g26 hello",function(err,data){
if(err) return console.log(err)
    console.log("succesfully");
})
fs.writeFile("../demo2.txt","vanshikagarg",function(err,data){
    if(err)console.log(err);
    console.log("done file created");
})