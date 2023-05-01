const express = require ("express");

const cors=require ("cors")

const data = require("./services/data")

const app=express()

app.use(cors({origin:'http://localhost:4200'}))

app.use(express.json())

app.post("/register",(req,res)=>{
    data.register(req.body.id,req.body.user_name,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post("/login",(req,res)=>{
    data.login(req.body.id,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(3000,()=>{
    console.log("server started 3000");
})