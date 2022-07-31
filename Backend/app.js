import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/User-routes";
import BlogRouter from "./routes/Blog-routes";
const app=express();

app.use(express.json());
app.use("/api/user",UserRouter);
app.use("/api/blog",BlogRouter);


mongoose.connect("mongodb+srv://yash_burbure:F8GFn2cTaAwJvDfr@cluster0.wk2j7.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(80,()=>{
            console.log("App running on localhost:80");
        });
    })
    .catch((err)=>{
        console.log("Can't connected to MongoDB");
    });

