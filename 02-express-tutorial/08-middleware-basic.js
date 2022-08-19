const express = require("express");
const { nextTick } = require("process");
const app = express();

const logger = (req,res, next)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(new Date().getFullYear())
    next()
}

app.get("/",logger,(req,res)=>{
    res.send("this is home page...")
    res.end()
})

app.get("/about",logger,(req,res)=>{
    res.send("this is about page...")
    res.end()
})

app.listen("9000",()=>{
    console.log("im listening to http://localhost:9000");
})