import { User } from "../Models/user.js";
import { Post } from "../Models/post.js";
import { Comment } from "../Models/comment.js";
import { asyncHandler } from "../Middlewares/asyncHandler.js";
import { errHandler } from "../Middlewares/errmiddleware.js";


export const PostComment =asyncHandler(async(req,res,next)=>{
    
    const {content} = req.body;
    if(!content){
        return next(new errHandler(404,"content not found"));
    }

    const {postId} = req.params;
    const posthere = await Post.findById(postId)
    if(!posthere){
        return next(new errHandler(404,"post not found"));
    }

    const comment = await Comment.create({
        content,
        user: req.user.id,
        post: postId
    });

    posthere.comments.push(comment._id);

    await posthere.save();
    res.status(201).json({message:"comment created successfully",
        posthere
    });

})


export const getallcommentsforpost = asyncHandler(async(req,res,next)=>{
    const {postId} = req.params;

    const post = await Post.findById(postId);

    if(!post){
        return next(new errHandler(404,"post not found"));
    }

    const comments = await Comment.find({
        post: postId
    }).populate('user','name');

    res.status(200).json({
        success : true,
        comments,
    });
});



export const updateComment = asyncHandler(async(req,res,next)=>{

    const {commentId} = req.params;
    const {content} = req.body;

    const comment = await Comment.findById(commentId);

    if(!comment){
        return next(new errHandler(404,"comment not found"));
    }

    if(comment.user.toString() !== req.user.id){
        return next(new errHandler(401,"not authorized to update this comment"));
    }

    comment.content = content || comment.content;
    const updatedComment = await comment.save();

    res.status(200).json({
        success : true,
        message:"Comment updated Successfully",
        comment : updatedComment,
    })
})


export const deleteComment =  asyncHandler(async(req,res,next)=>{
    const {commentId} = req.params;

    const comment = await Comment.findById(commentId);

    if(!comment){
        return next(new errHandler(400,"comment not found"));
    }

    if(comment.user.toString() !== req.user.id){
        return next(new errHandler(401,"not authorized to delete this comment"));
    }

    await Post.findByIdAndUpdate(comment.post,{
        $pull : {comments : commentId},
    });

    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({
        success : true,
        message : "Comment deleted Successfully",
    })

});