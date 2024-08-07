const Prompt = require("../models/Prompt");


const createPost = async (req, res) => {
    try {
        const newPrompt = new Prompt(req.body);
        const savedPrompt = await newPrompt.save();
        res.status(201).json(savedPrompt);        
    } catch (err) {        
        res.status(501).json("Failed to create new Post!");        
    }
}
const posts = async (req, res) => {
    try {
        const allposts = await Prompt.find();
        res.status(201).json(allposts);
    } catch (err) {
        res.status(501).json("failed to fetch all posts!")
    }
}
const editPost = async (req, res) => {
    try {
       const editPost=await Prompt.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(editPost);        
    } catch (err) {        
        res.status(501).json("Failed to edit the Post!");        
    }
}
const deletePost = async (req, res) => {
    try {
      await Prompt.findByIdAndDelete(req.params.id);
        res.status(201).json("Post deleted successfuly!");        
    } catch (err) {        
        res.status(501).json("Failed to delete a Post!");        
    }
}
const post = async (req, res) => {
    try {
        const aPost = await Prompt.findById(req.params.id);
        res.status(201).json(aPost);        
    } catch (err) {        
        res.status(501).json("Failed to fetch the Post!");        
    }
}

module.exports = { createPost, posts, editPost ,deletePost,post};