import express from "express";
import { getAllBlogs,addBlog,UpdateBlog,getById,deleteBlog,getByUserId } from "../controllers/Blog-controllers";

const Router=express.Router();

Router.get("/",getAllBlogs);
Router.post("/add",addBlog);
Router.put("/Update/:id",UpdateBlog);
Router.get("/:id",getById);
Router.delete("/:id",deleteBlog);
Router.get("/user/:id",getByUserId);

export default Router;