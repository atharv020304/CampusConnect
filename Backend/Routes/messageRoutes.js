import express from "express";
import { isAuth } from "../Middlewares/authMiddleware.js";
import { getMessages, postMessage } from "../Controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.post('/',isAuth,postMessage);
messageRouter.get('/:chatId',isAuth,getMessages);

export default messageRouter;