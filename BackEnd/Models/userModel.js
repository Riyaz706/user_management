import { Schema,model } from "mongoose";

// create user schmea with validations
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"enter the name"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"]
    },
    dateOfBirth:{
        type:Date,
        required:[true,"DOB is required"],
        
    },
    mobileNumber:{
        type:Number
    },
    // for soft deleting an user
    status:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
});

// create user model for user schema
export const userModel = new model("user",userSchema);