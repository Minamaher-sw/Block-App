
import { error } from "console";
import * as yup from "yup"

//fixed schema

const schema =yup
                .string()
                .min(3,"string must be at least 3 char")
                .max(10,"string must be not icrease than 10")

schema.validate("HI").catch(()=>{
    console.log("error");
})
schema.validate("mina").then((data)=>{
    console.log(data);
})

// object schema
const task={
    username:yup
            .string()
            .min(3,"string must be at least 3 char")
            .max(10,"string must be not icrease than 10")
            .required() ,
    age:yup
            .number()
            .required()
            .min(3)
            .max(100),
    email:yup
            .string()
            .email()
            .required()
}

const user2schema =yup.object(task);

const user ={
    username :"mina",
    age:23,
    email:"mina@gmal.com"
}

user2schema.validate(user)
                        .then((data)=>{
                            console.log("coorected user",data)
                        })
                        .catch((err)=>{
                            console.log(err.errors)
                        })

                        