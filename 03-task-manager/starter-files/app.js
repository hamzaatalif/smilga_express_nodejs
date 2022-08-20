require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./db/connect")
const Task = require("./models/Task");

app.use(express.static("./public"));
app.use(express.json());

app.get("/api/v1/tasks", async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({data:tasks})
})

app.get("/api/v1/tasks/:id",(req,res)=>{
    let taskToFindId = req.params.id;
    let singleTask = tasks.filter((task)=>{
        if (task.taskID === Number(taskToFindId)){
            return task;
        }
    })
    res.status(200).json({data:singleTask})
})

const startTheServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log("Server is listening on http://localhost:8000");
        })
    } catch (error) {
        console.log(error)
    }
}

startTheServer();