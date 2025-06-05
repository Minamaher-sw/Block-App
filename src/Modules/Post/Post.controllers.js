import express from "express"
import { createPost, getAllPosts ,getPost ,updatePost ,deletePost} from "./Services/post.service.js";
import { authorize } from "../../middleware/Authorization/user.author.js";
const postRouter =express.Router();

postRouter.post("/",authorize(["admin"]),createPost)
postRouter.get("/",authorize(["admin"]) ,getAllPosts)
postRouter.get("/:id",authorize(["user"]),getPost)
postRouter.patch("/:id",authorize(["user","admin"]),updatePost)
postRouter.delete("/:id",authorize(["user"]),deletePost);

export default postRouter;