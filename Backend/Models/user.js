import mongoose, { connections, mongo } from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import validator from "validator";
import { validate } from "node-cron";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength:[8,"minimum 8"],
        select : false
    },
    role: {
        type: String,
        enum: ['student', 'alumni'],
        default: 'student'
    },
    graduationYear: {
        type: Number,
    },

    skills: [String],

    

    connections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
{
    timestamps: true
}
);


userSchema.pre("save" ,async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,5)
})


userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: "8h",
    })
}


export const User = mongoose.model('User',userSchema)