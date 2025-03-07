const express = require("express")
const app =express()
const mongoose = require("mongoose")
app.use(express.json())
require("dotenv").config()
const PORT = 8080

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("mongo db successfully connected"))
    .catch(err=> console.error(err))



app.get("/",(req,res)=>{
    try{
    return res.status(200).json({message:"Api is running"})
    }catch(err){
        return res.status(500).json({message:"Internal server error"})
    }
})

app.get("/time",(req,res)=>{
    try{
        return res.status(200).json({serveTime : new Date().toISOString()})
    }catch(err){
        return res.status(500).json({message:"Internal server error"})
    }
})

app.listen(PORT,()=>{
    console.log("The server is running on http://localhost:8080")
})