import { Router } from "express"
import {userModel} from "../Models/userModel.js"

// create min-server
export const userApp = Router();

// user api routes

// create user
userApp.post('/user',async(req,res)=>{
    let newUser = await userModel.insertOne({...req.body});
    let newUserDoc = await newUser.save();
    if(!newUserDoc){
        return res.status(404).json({message:"user not added"})
    }
    return res.status(201).json({message:"user added successfully",payload:newUserDoc})
})
// read all users
userApp.get('/users',async(req,res)=> {
    let usersData = await userModel.find({status:true});
    if(!usersData ){
        return res.status(404).json({message:"users not found"});
    }
    return res.status(201).json({message:"users found",payload:usersData});
})
// read a user by id
userApp.get("/user/:id",async(req,res)=>{
    let reqUser = await userModel.findOne({_id:req.params.id,status:true});
    !reqUser ? res.status(404).json({message:"User not found"}):res.status(201).json({message:"user found",payload:reqUser});
})
// delete a user by id
userApp.delete('/user/:id',async(req,res)=>{
    let reqUser = await userModel.findOneAndUpdate({_id:req.params.id,status:true},{$set:{status:false}});
    !reqUser ? res.status(404).json({message:"User not found"}):res.status(201).json({message:"user deleted"});
})
// update a user by id
userApp.patch('/user/:id',async(req,res)=>{
    let reqUser = await userModel.findOneAndUpdate({_id:req.params.id,status:false},{$set:{status:true}},{new:true});
    !reqUser ? res.status(404).json({message:"User not found"}):res.status(201).json({message:"user activated",payload:reqUser});
})
