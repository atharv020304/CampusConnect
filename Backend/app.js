import express from "express"
import cors from "cors"
import { config } from "dotenv"
import cookieParser from "cookie-parser";
import { connection } from "./Database/connection.js";
import userRouter from "./Routes/userRoutes.js";
import postRouter from "./Routes/postRoutes.js";
import questionRouter from "./Routes/questionRoutes.js";


const app = express();
config({path: "./config/config.env"})

const corsOrigin = process.env.FRONTEND_URL 


app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/user",userRouter)
app.use("/api/v1/postcontent",postRouter)
app.use("/api/v1/question",questionRouter)


connection()

export default app;