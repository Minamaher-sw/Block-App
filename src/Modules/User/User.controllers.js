import express from "express"
import { signupValidate, updateUserValidate } from "./validate/User.validate.js";
import { getAllUser, signup ,userLogin ,getUserById ,updateUser ,deleteUser} from "./Services/User.services.js";
const userRouter =express.Router();


userRouter.post("/",signupValidate,signup)
userRouter.post("/login",userLogin)
userRouter.get("/",getAllUser)
userRouter.get("/:id",getUserById)
userRouter.patch("/:id",updateUserValidate,updateUser)
userRouter.delete("/:id",deleteUser);

export default userRouter;