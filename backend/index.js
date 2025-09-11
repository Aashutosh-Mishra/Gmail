// const express = require('express');
//zVIVIMgNDcYStuFJ
import express from 'express'; // Using ES6 module syntax, react way;
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/user.route.js';


dotenv.config({});
connectDB();

const app = express();
const PORT = 8080;
// app.get("/home", (req,res)=>{
//     return res.status(200).json({
//         message: "Hello from Backend",
//         success: true
//     })
// })

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

const corsOptions ={
    origin:'http://localhost:5173/',
    credentials:true,
    //access-Control-Allow-Origin:true,
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));
//routes

app.use("/api/v1/user", userRoute);

"http://localhost:8080/api/v1/user/register"
"http://localhost:8080/api/v1/user/login"


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})