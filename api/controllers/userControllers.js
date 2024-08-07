const User=require("../models/User");
const Prompt=require("../models/Prompt");


const users = async (req, res) => {
    try {
        const allusers=await User.find();
        res.status(201).json(allusers);        
    } catch (err) {        
        res.status(501).json("Failed to fetch all users!");        
    }
}
const userById = async (req, res) => {
    try {
        const allusers=await User.find(req.body.id);
        res.status(201).json(allusers);        
    } catch (err) {        
        res.status(501).json("Failed to fetch a user!");        
    }
}
const userPosts = async (req, res) => {
    try {
        const allposts = await Prompt.find({creator:req.params.id});
        res.status(201).json(allposts);
    } catch (err) {
        res.status(501).json("failed to fetch all posts!")
    }
}
const editUser = async (req, res) => {
    try {
       const editPost=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(editPost);        
    } catch (err) {        
        res.status(501).json("Failed to edit the user!");        
    }
}
const deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
        res.status(201).json("User has been deleted successfuly!");        
    } catch (err) {  
        res.status(501).json("Failed to delete the user!");    
    }
}

module.exports = {users,userById,userPosts,editUser,deleteUser};