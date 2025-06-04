import jwt  from "jsonwebtoken";
import { User } from "../../../../../ITI_3_Month/Node js/Day5/lab/backend/models/user";

export const auth=async (res ,req,next)=>{

    try{
        const {authorization} = req.headers

    if(!authorization){
        res.status(401).json({nessage:"authentication invalid"})
    }
    const payload =jwt.verify(authorization ,process.env.JWT_SECRET);
    const user = await User.findOne({username:payload.username});
    if(!user){
        res.status(401).json({nessage:"authentication invalid"})
    }
        req.user =user ;
    }
    catch(err){
        next(err)
    }
}