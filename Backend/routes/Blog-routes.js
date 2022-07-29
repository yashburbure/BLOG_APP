import express from "express";
import { getAllBlogs,addBlog } from "../controllers/Blog-controllers";

const Router=express.Router();

Router.get("/",getAllBlogs);
Router.post("/add",addBlog);

export default Router;