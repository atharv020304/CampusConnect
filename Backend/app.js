import express from "express"
import cors from "cors"
import { config } from "dotenv"
import fileUploa from "express-fileupload"
import cookieParser from "cookie-parser";
import { connection } from "./Database/connection.js";


const app = express();
config({path: "./config/config.env"})

const corsOrigin = process.env.FRONTEND_URL 


app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connection()

export default app;