// const express = require('express');
//zVIVIMgNDcYStuFJ
import express from 'express'; // Using ES6 module syntax, react way;
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDB from './db/connectDB.js';



dotenv.config({});
connectDB();

const app = express();
// app.get("/home", (req,res)=>{
//     return res.status(200).json({
//         message: "Hello from Backend",
//         success: true
//     })
// })

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})