import Blog from "../model/Blog";

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
    const blog=new Blog({
        title,description,image,user
    });
    try{
        Blog.save();
    }
    catch(err){
        console.log(err);
    }
    return res.status(200).json({blog});
}


export {getAllBlogs,addBlog};