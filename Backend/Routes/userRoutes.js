import express from "express"
import { isAuth } from "../Middlewares/authMiddleware.js"
import { UserRegister } from "../Controllers/userController.js"


const userRouter = express.Router();

userRouter.post('/register',UserRegister)

export default userRouter;