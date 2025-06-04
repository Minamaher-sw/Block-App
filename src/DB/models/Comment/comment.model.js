import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        validate: {
        validator: function (value) {
            return value.length <= 60;
        },
        message: props => `Content "${props.value}" must be 60 characters or fewer.`
        }
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;