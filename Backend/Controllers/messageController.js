import { asyncHandler } from "../Middlewares/asyncHandler";
import { errHandler } from "../Middlewares/errmiddleware";
import { Chat } from "../Models/chat";
import { Message } from "../Models/message";


export const postMessage = asyncHandler(async(req,res,next)=>{
    const {chatId ,content} = req.body;

    if(!content || !chatId){
        return next(new errHandler(400,'Please provide both chatId and content'))
    }

    const chat = await Chat.findById(chatId);

    if(!chat){
        return next(new errHandler(400,"chat not found"));
    }

    const message = await Message.create({
        chat: chatId,
        sender: req.user._id,
        content,
    });


    chat.lastMessageAt = Date.now();
    await chat.save();

    //io cha vakya tak ikde cofig nntr

    res.status(201).json({
        success: true,
        message,
    });
});



export const getMessages = asyncHandler(async(req,res,next)=>{
    const {chatId} = req.params;

    const messages = await Message.find({chat: chatId})
    .populate('sender','name')
    .sort('createdAt');

    res.status(200).json({success:true, messages});
    
});