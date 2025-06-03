import express from "express"
import { creatCommentJoiValidate } from "./validate/Comment.validate";
const commentRouter =express.Router();

commentRouter.post("/",creatCommentJoiValidate)
commentRouter.get("/")
commentRouter.patch("/:id",)
commentRouter.delete("/:id");

export default commentRouter;