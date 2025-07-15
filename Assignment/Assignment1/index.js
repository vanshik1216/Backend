const fs=require("fs");
// let str="";
//Method 1 of insertion of data in file by loop 
// for(let i=2;i<process.argv.length;i++){
//     str+=process.argv[i]+" ";
// }
// fs.writeFile("../assign.txt",str,function(err,data){
//     if(err)return console.log(err)
//         console.log("File created with given str");
// })
//another method by shifting value 0 and 1 --previous mein o(n )mein hora h or isme O(2) mein
process.argv.shift();
process.argv.shift();
// let str=process.argv.toString();//aise vha , ara haii toh hum comma ko replace krdege hum un data ko nextline se krre h
let str=process.argv.toString().replace(",","\n");

fs.writeFile("../assign1.txt",str,function(err,data){
    if(err)return console.log(err)
        console.log("File created with given str");
})