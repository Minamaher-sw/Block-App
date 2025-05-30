import express from "express";

const app =express();
const port=3001;
const hostname="127.0.0.1"


app.listen(port ,hostname ,(err)=>{
    if (err) console.log("Server not listen");
    console.log("server is listen on port ",port);
})