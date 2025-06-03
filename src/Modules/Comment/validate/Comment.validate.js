import { CommentJoiSchema } from "../../../../middleware/Joi_validate/Comment/Comment.data.joi"
import validateRequest from "../../../../middleware/Joi_validate/joi.midlleWare.validate"


export const creatCommentJoiValidate =()=>{
    validateRequest(CommentJoiSchema);
}