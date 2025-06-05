import mongoose from "mongoose";

export const databaseConnection =()=>{
        mongoose.connect('mongodb://127.0.0.1:27017/Block-app')
        .then(() => {
            console.log("DataBase Connected");
        })
        .catch(err => {
            throw err
        });
}