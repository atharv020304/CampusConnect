import express from 'express'
import { isAuth } from '../Middlewares/authMiddleware.js'
import { createOrGetChat, getUserChats } from '../Controllers/chatController.js';

const chatRouter = express.Router();

chatRouter.post('/createorget',isAuth,createOrGetChat);
chatRouter.get('/getall',isAuth,getUserChats)

export default chatRouter;
