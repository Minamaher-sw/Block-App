import express from "express";

import { userJOISchema ,updateUserSchema } from "./src/data/request_data.js";
import request_validate from "./src/middleware/request_validate.js";

const app =express(); 
// parser
app.use(express.json());

const port=3001;
const hostname="127.0.0.1"


app.post("/users",request_validate(userJOISchema),(req,res,next)=>{
    res.send("created");
})
app.patch("/users",request_validate(updateUserSchema),(req,res,next)=>{
    res.send("created");
})
app.listen(port ,hostname ,(err)=>{
    if (err) console.log("Server not listen");
    console.log("server is listen on port ",port);
})