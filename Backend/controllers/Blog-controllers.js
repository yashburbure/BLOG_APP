import mongoose from "mongoose";
import Blog from "../model/Blog";
import User from "../model/User";

const getAllBlogs=async(req,res,next)=>{
    let blogs;
    try{
        blogs=await Blog.find();
    }
    catch(err){
        console.log(err);
    }
    if(!blogs){
        return res.status(404).json({
            message:"No blogs found"
        });
    }
    return res.status(200).json({blogs});
};

const addBlog=async(req,res,next)=>{
    const {title,description,image,user}=req.body;
    let existingUser;
    try{
        existingUser=await User.findById(user);
    }
    catch(err){
        console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({
            message:"Unable to find User by id"
        });
    }
    const blog=new Blog({
        title,description,image,user
    });
    try{
        const session=await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});
        existingUser.blogs.push(blog);
        await existingUser.save({session});
        await session.commitTransaction();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:err
        });
    }
    return res.status(200).json({blog});
}


const UpdateBlog=async(req,res,next)=>{
    const {title,description}=req.body;
    const Blogid=req.params.id;
    let blog;
    try{
        blog=await Blog.findByIdAndUpdate(Blogid,{$set:{
            title,
            description
        }})
    }
    catch(err){
        console.log(err);
    }
    if(!blog){
        return res.status(500).json({
            message:"Unable to Update The blog"
        });
    }
    return res.status(200).json({blog});
}
const getById=async(req,res,next)=>{
    const Blogid=req.params.id;
    let blog;
    try{
        blog=await Blog.findById(Blogid);
    }
    catch(err){
        console.log(err);
    }
    if(!blog){
        return res.status(404).json({
            message:"Blog not found"
        });
    }
    return res.status(200).json({blog});
};
const deleteBlog=async(req,res,next)=>{
    const Blogid=req.params.id;
    let blog;
    try{
        blog=await Blog.findByIdAndDelete(Blogid).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    }
    catch(err){
        console.log(err);
    }
    if(!blog){
        return res.status(500).json({
            message:"Blog not found"
        });
    }
    return res.status(200).json({
        message:"Blog deleted successfully"
    });
}
const getByUserId=async(req,res,next)=>{
    const UserId=req.params.id;
    let userBlogs;
    try{
        userBlogs=await User.findById(UserId).populate("blogs");
    }
    catch(err){
        console.log(err);
    }
    if(!userBlogs){
        return res.status(404).json({
            message:"No Blogs found"
        });
    }
    return res.status(200).json({
        blog:userBlogs
    });
};

export {getAllBlogs,addBlog,UpdateBlog,getById,deleteBlog,getByUserId};