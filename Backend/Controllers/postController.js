import { asyncHandler } from "../Middlewares/asyncHandler.js";
import { errHandler } from "../Middlewares/errmiddleware.js";
import { User } from "../Models/user.js";
import { Post } from "../Models/post.js";
import cloudinary from "cloudinary"

export const PostContent = asyncHandler(async (req, res, next) => {
    console.log(req.body);

    const { content, comments ,image} = req.body;

    if (!content) {
        return res.status(400).json({ message: "Please enter the content of the post" });
    }

    let imgurl = null;

    if(image){
        try{

                const result = await cloudinary.v2.uploader.upload(image,{
                    folder: "posts",
                })
                imgurl = result.secure_url
        }catch(error){
            return res.status(500).json({
                message: "Failed to upload image",
                error: error.message
            })
        }
    }

    const post = await Post.create({
        author: req.user.id,  
        content: content,
        comments: comments,
        image: imgurl
    });

    res.status(200).json({
        message: "Post created successfully",
        post: post  
    });
});

export const getAllPost = asyncHandler(async (req,res,next)=>{
    const posts = await Post.find().populate('author','name')

    if(!posts){
        return next(errHandler(400, "no posts to send"));
    }

    res.status(200).json({
        message: "Posts retrieved successfully",
        posts: posts
    })
});


export const updatePost = asyncHandler(async (req, res, next) => {
    const { content } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
        return next(errHandler(404, "Post not found"));
    }

    if (post.author.toString() !== req.user.id) {
        return next(errHandler(401, "You are not authorized to update this post"));
    }

    post.content = content || post.content;

    const updatedPost = await post.save();

    res.status(200).json({
        success: true,
        message: "Post updated successfully",
        post: updatedPost,
    });
});


export const deletePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);


    if (!post) {
        return next(errHandler(404, "Post not found"));
    }

    if (post.author.toString() !== req.user.id) {
        return next(errHandler(403, "Not allowed to delete the post"));
    }

    
    await Post.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success: true,
        message: "Post deleted successfully",
    });
});
