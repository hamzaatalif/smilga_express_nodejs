const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

app.post("/api/people",(req,res)=>{
    const name = req.body;
    if (!name){
        return res.status(404).send("Please provide a name")
    }
    
})

app.listen("8000", () => {
    console.log("app is listening on http://localhost:8000");
})