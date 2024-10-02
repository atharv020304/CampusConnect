import { connect } from "mongoose";
import { asyncHandler } from "../Middlewares/asyncHandler.js";
import { errHandler } from "../Middlewares/errmiddleware.js";
import { User } from "../Models/user.js"
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

});

export const UserLogin = asyncHandler(async(req,res,next)=>{

        const {email ,password, role} = req.body;

        if(!email || !password || !role){
            return next(new errHandler(400,"this field is required"))
        }

        const user = await User.findOne({email}).select("+password");
        if(!user){
            return next(new errHandler(401,"invalid email or password"))
        }

        const isPassword = await user.comparePassword(password);
        if(!isPassword){
            return next(new errHandler(401,"invalid email or password"))
        }

        if(user.role !== role){
            return next(new errHandler(401,"invalid role"))
        }

        sendToken(user, 200,res,"User Logged in Successfully");
});

export const Logout = asyncHandler(async(req,res,next)=>{

    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
        httpOnly:true
    }).json({
        success:true,
        message:"Logged out successfully"
    })

})


//just for info - > this user is accessed from auth middleware 
export const GetUser = asyncHandler(async(req,res,next)=>{

    const user = req.user;

    res.status(200).json({
        success:true,
        user,
    })
})


export const UpdateUser = asyncHandler(async(req,res,next)=>{
    const newData = {
        name: req.body.name,
        email: req.body.email,
        graduationYear: req.body.graduationYear,
        skills: req.body.skills,
    }

    const user  = await User.findByIdAndUpdate(req.user.id,newData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });

    res.status(200).json({
        success:true,
        user,
        "message":"User updated"
    })

})

export const UpdatePassword = asyncHandler(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if(!isPasswordMatched){
        return next(new errHandler(400,"passwords do not match"));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendToken(user,200,res,"Password Updated Successfully")

});

