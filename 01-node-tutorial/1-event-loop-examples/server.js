const http = require("http");

const server = http.createServer((req,res)=>{
    if (req.url.includes("layout")){
        res.end("this is for layout...")
    }
    else {
        res.end("Hi how are you?")
    }    
})


server.listen("8000",()=>{
    console.log("server is listening now...")
})

