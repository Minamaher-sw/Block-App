import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [3, "Username must be at least 3 characters"],
        maxLength: [30, "Username must be at most 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        unique: true,
        validate: {
        validator: function (value) {
            // Basic email pattern
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: props => `"${props.value}" is not a valid email address`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
        maxLength: [100, "Password must be at most 100 characters"]
    },
    role: {
        type: String,
        enum: {
        values: ["user", "admin"],
        message: "{VALUE} is not supported"
        },
        default: "user"
    }
    }, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
        delete ret.password;
        delete ret.role;
        delete ret.__v;
        return ret;
        }
    }
    });

    // Hash password before saving
    userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("User", userSchema);
export { User };
