import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    lastMessageAt: {
        type: Date,
        required: true, 
    },
    chatName: {
        type: String,
        default: null,  // optional for grp chats
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    }],
},
{
    timestamps: true
});

export const Chat = mongoose.model('Chat', chatSchema);
