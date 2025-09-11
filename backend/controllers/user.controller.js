import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({});


export const register= async(req, res)=>{
    try{
        const{fullname, email, password} = req.body;
        if(!fullname || !email || !password){
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        //check if user already exists
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User already exists",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
         const profilePhoto=`https://avatar.iran.liara.run/public/boy`;
        await User.create({
            fullname,
            email,
            password:hashedPassword,
            profilePhoto:profilePhoto
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })

    }catch(error){
        console.log(error);

    }
}

export const login = async(req, res)=>{
    try{
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        //check if user not exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }

        const tokenData={
            userId: user._id,

        }
        const token =  jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        return res.status(200).cookie("token", token,{maxAge: 1*24*60*60*1000, httpOnly:true, sameSite: 'strict'}).json({
            
            message: `${user.fullname} logged in successfully`,
            success: true,
            user,
            token
        })
    }catch(error){
        console.log(error);
         res.status(500).json({
         message: "Server error",
         success: false,
    });

    }
}

export const logout = async(req, res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: "Logged out successfully.",
            success: true,
        });
        
    } catch (error) {
        console.log(error);
         res.status(500).json({
         message: "Server error",
         success: false,
    });
        
    }
}