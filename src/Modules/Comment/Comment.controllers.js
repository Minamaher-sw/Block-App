import express from "express"
import { authorize } from "../../middleware/Authorization/user.author.js";
import { createComment, getAllCommet ,getComment ,updateComment ,deleteComment} from "./Services/comment.service.js";
import { validateRequest } from "../../middleware/Joi_validate/joi.midlleWare.validate.js";
import { CommentJoiSchema } from "../../middleware/Joi_validate/Comment/Comment.data.joi.js";
const commentRouter =express.Router();

commentRouter.post("/:id",authorize(["admin","user"]),validateRequest(CommentJoiSchema) ,createComment)
commentRouter.get("/",authorize(["admin","user"]),getAllCommet)
commentRouter.get("/:id",authorize(["admin"]),getComment)
commentRouter.patch("/:id",authorize(["admin"]),updateComment)
commentRouter.delete("/:id",authorize(["admin"]),deleteComment);

export default commentRouter;