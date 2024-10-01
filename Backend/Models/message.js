import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    read:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps: true
});


export const Message = mongoose.model('Message',messageSchema)