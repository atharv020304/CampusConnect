import express from "express"
import { isAuth } from "../Middlewares/authMiddleware.js"
import { GetUser, Logout, UpdatePassword, UpdateUser, UserLogin, UserRegister } from "../Controllers/userController.js"


const userRouter = express.Router();

userRouter.post('/register',UserRegister)
userRouter.post('/login',UserLogin)
userRouter.get('/logout',isAuth,Logout)
userRouter.get('/getuser',isAuth,GetUser)
userRouter.put('/update/profile',isAuth,UpdateUser)
userRouter.put('/update/password',isAuth,UpdatePassword)

export default userRouter;