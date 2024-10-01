import { connect } from "mongoose";
import { asyncHandler } from "../Middlewares/asyncHandler.js";
import { errHandler } from "../Middlewares/errmiddleware.js";
import { User } from "../Models/user.js";
import { sendToken } from "../Utils/jwtToken.js";

export const UserRegister = asyncHandler(async(req,res,next)=>{

    const {name,email,password,role,graduationYear,skills} =req.body;

    if(!name || !email || !password || !role || !graduationYear || !skills){
        return next(new errHandler(400,"this field is required"))
    }

    const userExists = await User.findOne({email});

    if(userExists){
        return next(new errHandler(400,"email already registered"))
    }

    const user = {
        name, email,password,role,graduationYear,skills
    }

    const userRes = await User.create(user);
    sendToken(userRes,201,res,"User registered")

})