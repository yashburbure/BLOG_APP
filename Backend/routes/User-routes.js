import express from "express";
import {getAllUser,SignUp,Login} from "../controllers/user-controller";

const Router=express.Router();

Router.get("/",getAllUser);
Router.post("/SignUp",SignUp);
Router.post("/Login",Login);

export default Router;