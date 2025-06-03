import User from "../../../../DB/models/User/user.model.js"

const signup=()=>{
    async (req,res)=>{
        try{
            const createdUser =await User.create(req.body);
            res.send(createdUser)
        }
        catch(err)
        {
            res.status(500).json({message:"internal server error"});
        }
    }
}
const userLogin =()=>{
    async (req ,res)=>{
        try{
            const {username ,password}=req.body ;
            const user =await User.find({username : username}) ;
            if(user){
                const hash =user.password ;
                const valid =bcrypt.compareSync(password,hash);
                if(valid){
                    const Token = jwt.sign(
                        {
                            username:user.username,
                            id :user._id
                        },
                        process.env.JWT_SECRET,
                        {expiresIn:"1d"}
                    )
                    return Token ;
                }
                else{
                    throw "invalid login "
                }
            }
            else{
                    throw "username or password invalid" 
            }
        }
        catch(err){
            res.status(500).json({message :"internal server error"});
        }
    }
}
const getAllUser =()=>{
    async (req,res)=>{
        try{
            const allUsers =await User.find();
            res.send(allUsers)
        }
        catch(err)
        {
            res.status(500).json({message:"internal server error"});
        }
    }
}

const getUserById =()=>{
    async (req,res)=>{
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
}

const updateUser =()=>{
    try{
        async (req ,res )=>{
        const userId = req.params.id;
        const {username , email , password} =req.body;
        const user =req.user ;
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
    }
    catch(err){
        res.status(500).json({message:"internal server error"});
    }
}

const deleteUser =()=>{
    try{
        async (req,res)=>{
            const userId =req.params.id;
            await User.deleteOne({_id :userId});
            res.send("User Is Delelted")
        }
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