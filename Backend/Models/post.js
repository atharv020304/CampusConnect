import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required: false
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    postedOn: {
        type: Date,
        default: Date.now
    }

});

export const Post = mongoose.model('Post',postSchema)