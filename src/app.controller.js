import express from "express";
import userRouter from "../rootes/user.root.js";
import commentRouter from "../rootes/comment.root.js";
import postRouter from "../rootes/post.root.js";
import { databaseConnection } from "../DB/models/Connection.js";
import { auth } from "./middleware/Authentication/user.auth.js";
// import cors
const app =express(); 
const port=3001;
const hostname="127.0.0.1"

export const bootstrap =()=>{
    app.use(express.json());

    if (databaseConnection() == 1)
    {
        app.listen(port,hostname, 511,() => console.log("Server running"));
    }
    else{
        console.log("Server not running");
    }
    app.use(userRouter)
    app.use(auth)
    app.use(commentRouter)
    app.use(postRouter)
}