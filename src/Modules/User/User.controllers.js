import express from "express"
import {validateRequest} from "../../middleware/Joi_validate/joi.midlleWare.validate.js";
import {userJOISchema ,updateUserSchema} from "../../middleware/Joi_validate/User/User.data.joi.js"
import { getAllUser, signup ,userLogin ,getUserById ,updateUser ,deleteUser} from "./Services/User.services.js";
const userRouter =express.Router();


userRouter.post("/",validateRequest(userJOISchema),signup)
userRouter.post("/login",userLogin)
userRouter.get("/",getAllUser)
userRouter.get("/:id",getUserById)
userRouter.patch("/:id",validateRequest(updateUserSchema),updateUser)
userRouter.delete("/:id",deleteUser);

export default userRouter;