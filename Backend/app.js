import express from "express";
import mongoose from "mongoose";
import User from "./model/User";
import router from "./routes/User-routes";
const app=express();

app.use(express.json());
app.use("/api/user",router);

mongoose.connect("mongodb+srv://yash_burbure:F8GFn2cTaAwJvDfr@cluster0.wk2j7.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(80,()=>{
            console.log("App running on localhost:80");
        });
    })
    .catch((err)=>{
        console.log("Can't connected to MongoDB");
    });

