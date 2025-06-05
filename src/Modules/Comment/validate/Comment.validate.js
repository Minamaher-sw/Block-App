import { CommentJoiSchema } from "../../../middleware/Joi_validate/Comment/Comment.data.joi.js";
import {validateRequest} from "../../../middleware/Joi_validate/joi.midlleWare.validate.js"


export const creatCommentJoiValidate =()=>{
    validateRequest(CommentJoiSchema);
}