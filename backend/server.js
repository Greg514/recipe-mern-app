import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config()
const PORT = process.env.PORT || 3000 ;

const app = express();

app.get("/",(req,res)=>{
    res.send("server is ready!!!")
})

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server started at ${PORT}`)
})
