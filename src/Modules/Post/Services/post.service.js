import Post from "../../../DB/models/Post/posts.model.js";

export const createPost =async(req,res)=>{

    const postData =req.body ;
    const user =req.user ;
    const inserPost ={
        title :postData.title ? postData.title : " ",
        content :postData.content ?postData.content  :" ",
        userID : user._id 
    }
    console.log("hi mina");
    try{
        const createdPost = await Post.create(inserPost);
        res.send(createdPost);
    }
    catch(err){
        res.status(500).json({message:err});
    }

}

export const getAllPosts = async (req,res)=>{

    const allPosts = await Post.find().populate("userID");

    res.send(allPosts);
}

export const getPost = async (req,res)=>{

    const postId = req.params.id;
    const retPost = await Post.findOne({_id:postId});

    res.send(retPost);
}

export const updatePost =async (req,res)=>{
    const postId = req.params.id;
    const {title,content}=req.body;
    const retPost = await Post.findOne({_id:postId});
    retPost.content =content ? content : retPost.content;
    retPost.title = title ? title : retPost.title;
    const updatePost_v =await Post.findByIdAndUpdate(
                    { _id: postId },
                    { $set: retPost },
                    { new: true, runValidators: true }
                )
    res.send(updatePost_v);
}

export const deletePost = async (req,res)=>{
    const postId = req.params.id;
    await Post.deleteOne({_id:postId});
    res.send("deleted is done ");
}