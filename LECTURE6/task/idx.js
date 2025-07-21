const fs=require('fs');
let str=""
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err)return console.log(err)
        str+=data+"\n";
    fs.readFile("../demo2.txt","utf-8",function(err,data){
        if(err)return console.log(err)
            str+=data;
        fs.writeFile("../demo4.txt",str,function(err,data){
            if(err)return console.log(err)
            console.log("added")
        })
    })
})