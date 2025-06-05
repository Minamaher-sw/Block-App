import jwt  from "jsonwebtoken";
import { User } from "../../DB/models/User/user.model.js";

export const auth=async (req,res,next)=>{
    try{
        const {authorization} = req.headers
        if(!authorization){
            res.status(401).json({nessage:"authentication invalid"})
        }
        const payload =jwt.verify(authorization ,process.env.JWT_SECRET);
        const user = await User.findOne({username:payload.username});
        if(!user){
            res.status(401).json({message:"authentication invalid"})
        }
            req.user =user ;
            next();
    }
    catch(err){
        next(err)
    }
}