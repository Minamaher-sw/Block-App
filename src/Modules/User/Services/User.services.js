import {User} from "../../../DB/models/User/user.model.js";
import bcrypt from 'bcryptjs';
import  jwt from 'jsonwebtoken';
const signup= async (req,res)=>{
        try{
            console.log("hi");
            const { username, email, password } = req.body;
            const createdUser =await User.create({ username, email, password })
            res.send(createdUser)
        }
        catch(err)
        {
            res.status(500).json({message:"internal server error" ,err:err});
        }
    }
const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign(
            {
                username: user.username,
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error", error: err.message || err });
    }
};
const getAllUser =async (req,res)=>{
        try{
            const allUsers =await User.find();
            res.send(allUsers)
        }
        catch(err)
        {
            res.status(500).json({message:"internal server error"});
        }
    }

const getUserById =async (req,res)=>{
        const userId = req.params.id;
        try{
            const user =await User.find({_id:userId});
            if(user)
            {
                res.send(user)
            }
            else{
                throw "internal server error"
            }
        }
        catch(err)
        {
            res.status(500).json({message:"internal server error"});
        }
    }
const updateUser =async (req ,res )=>{
        try{
            const userId = req.params.id;
        const {username , email , password} =req.body;
        const user =await User.findOne({_id:userId})
        user.username =username ? username : user.username ;
        user.email =email ? email : user.email ;
        user.password =password ? password : user.password ;

        const updateuser_v =await User.findByIdAndUpdate(
                { _id: userId },
                { $set: user },
                { new: true, runValidators: true }
            )
            res.send(updateuser_v);
        }
        
    catch(err){
        res.status(500).json({message:"internal server error"});
    }
}

const deleteUser =async (req,res)=>{
    try{
            const userId =req.params.id;
            await User.deleteOne({_id :userId});
            res.send("User Is Delelted")
        }
        catch(err){
        res.status(500).json({message:"internal server error"});
    }
    }

export{
    signup,
    userLogin,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}