import Post from "../../../DB/models/Post/posts.model";

export const createPost =async(req,res)=>{

    const postData =req.body ;
    const createdPost = await Post.create(postData);
    res.send(createdPost);
}

export const getAllPosts = async (req,res)=>{

    const allPosts = await Post.find();

    res.send(allPosts);
}

export const getPost = async (req,res)=>{

    const postId = req.params.id;
    const retPost = await Post.findOne({_id:postId});

    res.send(retPost);
}

export const updatePost =async (req,res)=>{
    const postId = req.params.id;
    const {content}=req.body;
    const retPost = await Post.findOne({_id:postId});
    retPost.content =content ? content : retPost.content;
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