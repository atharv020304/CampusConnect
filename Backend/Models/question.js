import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    answers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer',
        }
    ],
}, { timestamps: true })


export const Question = mongoose.model('Question', questionSchema)