import mongoose from "mongoose";

const commentSchema = new  mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    postedOn: {
        type: Date,
        default: Date.now
    },
},
{
    timestamps: true,
});

export const Comment = mongoose.model('Comment',commentSchema)