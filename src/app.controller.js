import express from "express";
import userRouter from "./Modules/User/User.controllers.js";
import commentRouter from "./Modules/Comment/Comment.controllers.js";
import postRouter from "./Modules/Post/Post.controllers.js";
import { databaseConnection } from "./DB/Connection.js";
import { auth } from "./middleware/Authentication/user.auth.js";
import cors from "cors"
import "dotenv/config";

// import cors
const app = express();
const port = 3002;
const hostname = "127.0.0.1";

export const bootstrap = async () => {
    await databaseConnection();

    app.use(express.static('public'))
    app.use(express.json());
    app.use(cors());
    app.use("/users", userRouter);
    app.use(auth);
    app.use("/post", postRouter);
    
    app.use("/comment", commentRouter);

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });

    app.use((err, req, res, next) => {
        // console.error(err.stack);
        res.status(500).json({ message: "Internal Server Error" });
    });
}
