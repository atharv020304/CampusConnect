import express from "express";
import { isAuth } from "../Middlewares/authMiddleware.js";
import { deleteAnswer, PostAnswer } from "../Controllers/answerController.js";

const answerRouter = express.Router();

answerRouter.post('/post/:questionId',isAuth, PostAnswer);
answerRouter.delete('/delete/:id',isAuth,deleteAnswer);

export default answerRouter;