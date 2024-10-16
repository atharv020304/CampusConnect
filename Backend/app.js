import express from "express"
import cors from "cors"
import { config } from "dotenv"
import cookieParser from "cookie-parser";
import { connection } from "./Database/connection.js";
import userRouter from "./Routes/userRoutes.js";
import postRouter from "./Routes/postRoutes.js";
import questionRouter from "./Routes/questionRoutes.js";
import answerRouter from "./Routes/answerRoutes.js";
import commentRouter from "./Routes/commentRoutes.js";
import chatRouter from "./Routes/chatRoutes.js";
import messageRouter from "./Routes/messageRoutes.js";



const app = express();
config({path: "./config/config.env"})

const corsOrigin = process.env.FRONTEND_URL; // backend and frontend connection
app.use(cors({
    origin: corsOrigin,
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
})
);

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/user",userRouter)
app.use("/api/v1/postcontent",postRouter)
app.use("/api/v1/question",questionRouter)
app.use("/api/v1/answer",answerRouter)
app.use("/api/v1/comment",commentRouter)
app.use("api/v1/chats",chatRouter)
app.use("/api/v1/messages",messageRouter)



connection()

export default app;






// import express from "express"
// import cors from "cors"
// import { config } from "dotenv"
// import cookieParser from "cookie-parser";
// import { connection } from "./Database/connection.js";
// import userRouter from "./Routes/userRoutes.js";
// import postRouter from "./Routes/postRoutes.js";
// import questionRouter from "./Routes/questionRoutes.js";
// import answerRouter from "./Routes/answerRoutes.js";
// import commentRouter from "./Routes/commentRoutes.js";
// import chatRouter from "./Routes/chatRoutes.js";
// import messageRouter from "./Routes/messageRoutes.js";

// //imports for socket one 
// import http from 'http';
// import { Server } from "socket.io";



// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// config({path: "./config/config.env"})

// const corsOrigin = process.env.FRONTEND_URL;


// app.use(cookieParser())

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// app.use("/api/v1/user",userRouter)
// app.use("/api/v1/postcontent",postRouter)
// app.use("/api/v1/question",questionRouter)
// app.use("/api/v1/answer",answerRouter)
// app.use("/api/v1/comment",commentRouter)
// app.use("/api/v1/chats",chatRouter)
// app.use("/api/v1/messages",messageRouter)


// connection()


// io.on('connection',(socket) =>{
//     console.log('a user connected',socket.id);

//     socket.on('joinChat' ,(chatId)=>{
//         socket.join(chatId);
//         console.log(`user joined chat ${chatId}`);
//     });

//     socket.on('newMessage', (message)=>{
//         const {chatId, content , senderId } = message;

//         io.to(chatId).emit('messageReceived',message);
//     });

//     socket.on('disconnect',()=>{
//         console.log('user disconnected',socket.id);
//     })
// })


// export default app;