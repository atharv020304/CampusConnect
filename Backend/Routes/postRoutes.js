import express from "express"
import { isAuth, isAuthorized } from "../Middlewares/authMiddleware.js"
import { deletePost, getAllPost, PostContent, updatePost } from "../Controllers/postController.js";

const postRouter = express.Router();

postRouter.post('/post',isAuth,isAuthorized("alumni"),PostContent)
postRouter.get('/getallposts',isAuth,getAllPost)
postRouter.put('/update/:id',isAuth,isAuthorized("alumni"),updatePost)
postRouter.delete('/delete/:id',isAuth,isAuthorized('alumni'),deletePost)

export default postRouter;