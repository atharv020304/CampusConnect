import { User } from "../Models/user.js";
import { Answer } from "../Models/answer.js";
import { asyncHandler } from "../Middlewares/asyncHandler.js";
import { errHandler } from "../Middlewares/errmiddleware.js";
import { Question } from "../Models/question.js";


export const PostQuestion = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const postedBy = req.user.id;

    if (!title || !description) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    const question = await Question.create({
        title,
        description,
        postedBy
    })

    res.status(200).json({
        success: true,
        message: "Question posted successfully",
        question: question
    });
});



export const getAllQuestions = asyncHandler(async(req,res,next)=>{
    const questions = await Question.find().populate("postedBy").populate('answers');

    if(!questions){
        return next(errHandler(400,"cannot get questions"));
    }

    res.status(200).json({
        success:true,
        questions:questions
    })
});


export const getSingleQuestion = asyncHandler(async(req,res,next)=>{
    const question = await Question.findById(req.params.id).populate('postedBy').populate('answers');

    if(!question){
        return next(new errHandler(400,"cannot get question"));
    }

    res.status(200).json({
        success:true,
        question
    })
});


export const deleteQuestion = asyncHandler(async (req, res, next) => {
    const questionId = req.params.id;

    const userId = req.user._id;

    const question = await Question.findById(questionId);

    if (!question) {
        return next(errHandler(404, "Question not found"));
    }

    if (question.postedBy.toString() !== userId.toString()) {
        return next(errHandler(403, "You are not authorized to delete this question"));
    }

    await Question.findByIdAndDelete(questionId);

    res.status(200).json({
        success: true,
        message: "Question deleted successfully"
    });
});
