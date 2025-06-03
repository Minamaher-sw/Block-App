
import mongoose from "mongoose";
const {Schema} =mongoose

const postsSchema =new Schema({
    title:{
        type:String,
        minLength:[3,"length not valid"],
        validate:{
            validator:function(value){
                return value.length <= 50 ;
            },
            // message :`title "${props.value}" is too long. max length is 50 characters.`
            message: props => `Content "${props.value}" is too long. Max length is 100 characters.`
        }
    },
    content:{
        type:String,
        minLength:[10,"length not valid"],
        validate:{
            validator:function(value){
                return value.length <= 100 ;
            },
            // message :`title "${props.value}" is too long. max length is 100 characters.`
            message: props => `Content "${props.value}" is too long. Max length is 50 characters.`
        }
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
},{ timestamps: true })

const Posts =mongoose.model("Post",postsSchema);
export default Posts ;