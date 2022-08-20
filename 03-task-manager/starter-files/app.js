const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const tasks = require("./tasks");

app.use(express.static("./public"));

app.get("/api/v1/tasks",(req,res)=>{
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

app.listen(PORT,()=>{
    console.log("Server is listening on http://localhost:8000");
})