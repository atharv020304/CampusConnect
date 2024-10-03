import express from "express"
import { isAuth } from "../Middlewares/authMiddleware.js"
import { deleteQuestion, getAllQuestions, getSingleQuestion, PostQuestion } from "../Controllers/questionController.js";

const questionRouter = express.Router();

questionRouter.post('/post',isAuth,PostQuestion);
questionRouter.get('/getall',getAllQuestions)
questionRouter.get('/getsingle/:id',getSingleQuestion);
questionRouter.delete('/delete/:id',isAuth,deleteQuestion);


export default questionRouter;