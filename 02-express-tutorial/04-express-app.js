const exp = require("constants");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./navbar-app/public"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("./navbar-app/index.html"));
})

app.listen("8000",()=>{
    console.log("app is listening on 8000...");
})