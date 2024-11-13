// import { Message } from "../Models/message.js";
// import {Chat} from "../Models/chat.js"
// import { asyncHandler } from "../Middlewares/asyncHandler.js";
// import { errHandler } from "../Middlewares/errmiddleware.js";


// export const createOrGetChat = asyncHandler(async(req,res,next)=>{
//     const {participants} = req.body;

//     if(!participants || participants.length < 2){
//         return next(new Error('Participants must be at least 2'))
//     }

//     let chat = await Chat.findOne({
//         participants:{$all: participants , $size: participants.length}
//     }).populate('participants','name');

//     if(!chat){
//         chat = await Chat.create({participants});
//     }

//     res.status(200).json({
//         success: true,
//         chat
//     })
// })


// export const getUserChats = asyncHandler(async(req,res,next)=>{
//     const {userId} = req.user._id;

//     const chats = await Chat.find({participants: userId})
//     .populate('participants','name')
//     .sort('-updatedAt');

//     if(!chats){
//         return next(new errHandler(404,'No chats found'));
//     }

//     res.status(200).json({
//         success: true,
//         chats
//     });
// })

// server.js

