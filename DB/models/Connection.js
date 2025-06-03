import mongoose from "mongoose";

export const databaseConnection =()=>{
        mongoose.connect('mongodb://127.0.0.1:27017/Block-app')
        .then(() => {
            console.log("DataBase Connected")
            return 1
        })
        .catch(err => {
            console.error(err)
            return  -1
        });
}