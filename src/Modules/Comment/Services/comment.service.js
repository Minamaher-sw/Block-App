import Comment from "../../../DB/models/Comment/comment.model.js";

export const createComment =async(req,res)=>{

    const commentId =req.params.id;
    const {content} =req.body ;
    const user = req.user;
    const inserComment={
        content:content,
        userId:user._id,
        postId :commentId
    }
    try{
        const createdComment = await Comment.create(inserComment);
        res.send(createdComment);
    }
    catch(err){
        res.status(420).json({message:"comment not create" ,err:err})
    }
}

export const getAllCommet = async (req,res)=>{

    try{
        const allComments = await Comment.find().populate("postId").populate("userId");
        res.send(allComments);
    }
    catch(err){
        res.status(500).json({err:err})
    }
}

export const getComment = async (req,res)=>{

    const commentId = req.params.id;
    const retComment = await Comment.findOne({_id:commentId});

    res.send(retComment);
}

export const updateComment =async (req,res)=>{
    const commentId = req.params.id;
    const {content}=req.body;
    const retComment = await Comment.findOne({_id:commentId});
    retComment.content =content ? content : retComment.content;
    const updateComment_v =await Comment.findByIdAndUpdate(
                    { _id: postId },
                    { $set: retPost },
                    { new: true, runValidators: true }
                )
    res.send(updateComment_v);
}

export const deleteComment = async (req,res)=>{
    const commentId = req.params.id;
    await Comment.deleteOne({_id:commentId});
    res.send("deleted is done ");
}