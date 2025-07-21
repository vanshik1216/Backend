const fs=require("fs");
let variable="";
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err)return console.log(err)
        variable+=data+"\n";
    fs.readFile("../demo2.txt","utf-8",function(err,data1){
        if(err)return console.log(err)
          variable+=data1;
        fs.writeFile("../demo3.txt",variable,function(err,data){
            if(err)return console.log(err)
        console.log("successfull")
        })
    })
})
//task kii hme file mein jo data hai vo space k sth hai lekin dusri file m hum jb write kre toh multiple space na aye


//Assignment---part1 be3rd have folder assignment under which asign ment 1 assignment2 push krna hai fer 
// write data in file using fs module ,but input data should be taken using terminal




//terminal ka input process.argv se read hota haii yeh ek array hai jisme terminal ki input hoti haii
// console.log(process.argv[0]);