import validateRequest from "../../../middleware/Joi_validate/joi.midlleWare.validate.js";
import { updateUserSchema, userJOISchema } from "../../../middleware/Joi_validate/User/User.data.joi.js";

export const signupValidate =()=>{

    return  validateRequest(userJOISchema);
}

export const updateUserValidate=()=>
{
    return validateRequest(updateUserSchema);
}