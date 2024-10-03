import express from "express"
import { isAuth } from "../Middlewares/authMiddleware.js"
import { deleteComment, getallcommentsforpost, PostComment, updateComment } from "../Controllers/commentController.js"


const commentRouter = express.Router()

commentRouter.post('/post/:postId',isAuth,PostComment);
commentRouter.get('/getall/:postId',isAuth,getallcommentsforpost);
commentRouter.put('/update/:commentId',isAuth,updateComment);
commentRouter.delete('/delete/:commentId',isAuth,deleteComment);



export default commentRouter