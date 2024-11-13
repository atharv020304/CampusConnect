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
import messageRouter from "./Routes/messageRoutes.js";

const app = express();
config({path: "./config/config.env"})

const corsOrigin = process.env.FRONTEND_URL; 
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
// app.use("api/v1/chats",chatRouter)
app.use("/api/v1/messages",messageRouter)



connection()

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {  
    cors: {
    origin: corsOrigin
  } });


const users = {};

io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  // Save user info when they send their name (or other identifying data)
  socket.on('registerUser', (username) => {
    if(users[username]){
        console.log("User already registered");
    }
    users[username] = socket.id; // Map username to socket.id

    console.log(`User registered: ${username}, socket id: ${socket.id}`);
  });

  // Listen for private messages
  socket.on('privateMessage', (data) => {
    const { to, message } = data;
    const recipientSocketId = users[to];  // Get the recipient's socket.id from users map

    if (recipientSocketId) {
      // Send the message only to the recipient's socket
      io.to(recipientSocketId).emit('receiveMessage', {
        from: to, // The sender's socket id (could be the username)
        message,
      });
    } else {
      console.log(`User ${to} not found!`);
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    // Optionally remove user from the list when they disconnect
    for (let username in users) {
      if (users[username] === socket.id) {
        delete users[username];
        console.log(`Removed user: ${username}`);
        break;
      }
    }
  });
});

// Start server
httpServer.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

export default app;
