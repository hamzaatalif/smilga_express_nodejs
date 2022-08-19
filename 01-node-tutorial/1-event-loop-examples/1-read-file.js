const { Console } = require("console");
const {readFile,writeFile} = require("fs");

readFile("./first.txt","utf-8",(err,result)=>{
    if (err){
        console.log(err)
    }
    console.log(result)
})