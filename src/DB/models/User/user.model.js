import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcryptjs";
const userSchema = new Schema({
    username: {
        type: String,
        minLength:[3,"length not valid"],
        validate:{
            validator:function(value){
                return value.length <= 30 ;
            },
            // message :`title "${props.value}" is too long. max length is 100 characters.`
            message: props => `Content "${props.value}" is too long. Max length is 30 characters.`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type : String,
        minLength:[6,"length not valid"],
        validate:{
            validator:function(value){
                return value.length <= 100 ;
            },
            // message :`title "${props.value}" is too long. max length is 100 characters.`
            message: props => `Content "${props.value}" is too long. Max length is 50 characters.`
        }
    },
    role: {
        type: String,
        enum: {
            values: ["user", "admin"],
            message: "{VALUE} is not supported",
        },
        default: "user",
    },
},{ timestamps: true },{
    // adding tojson 
    toJSON :{
        transform:function(doc,ret,options){
            delete ret.password ;
            delete ret.role;
        }
    }
});
// hashing for password 
userSchema.pre("save",function(){
    const hash =bcrypt.hashSync(this.password , 8);
    this.password =hash ;
})


const User = mongoose.model("User", userSchema);
export default User;
