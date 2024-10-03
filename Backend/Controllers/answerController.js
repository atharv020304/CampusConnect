import { User } from "../Models/user.js";
import { Question } from "../Models/question.js";
import { Answer } from "../Models/answer.js";
import { asyncHandler } from "../Middlewares/asyncHandler.js";
import { errHandler } from "../Middlewares/errmiddleware.js";


export const PostAnswer = asyncHandler(async (req, res, next) => {
    const { questionId } = req.params;
    const { content } = req.body;
    const answeredBy = req.user.id;  

    console.log(questionId);

    const question = await Question.findById(questionId);

    if (!question) {
        return next(new errHandler(404, "Question not found"));  
    }

  
    const answer = await Answer.create({
        content,
        answeredBy,  
        question: questionId,
    });

   
    question.answers.push(answer._id);
    await question.save();

    res.status(201).json({
        success: true,
        answer,
    });
});


export const deleteAnswer = asyncHandler(async(req,res,next)=>{
    const {answerId} = req.params;
    const userId = req.user._id;

    const answer = await Answer.findById(answerId);
    if(!answer){
        return next(new errHandler(400,"answer not found"));
    }

    if(answer.answeredBy.toString() !== userId.toString()){
        return next(new errHandler(400,"you are not allowed to delete this comment"));
    }

    await Question.findByIdAndUpdate(answer.question, {
        $pull: {
            answers: answer._id
        }
    })

    await Answer.findByIdAndDelete(answerId);

    res.status(200).json({
        success : true,
        message: "answer deleted successfully"
    })
})