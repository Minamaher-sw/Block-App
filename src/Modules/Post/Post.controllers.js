import express from "express"
const postRouter =express.Router();

postRouter.post("/")
postRouter.get("/")
postRouter.patch("/:id")
postRouter.delete("/:id");

export default postRouter;