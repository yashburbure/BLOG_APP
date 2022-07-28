import express from "express";
import {getAllUser,SignUp} from "../controllers/user-controller";

const Router=express.Router();

Router.get("/",getAllUser);
Router.post("/SignUp",SignUp);


export default Router;