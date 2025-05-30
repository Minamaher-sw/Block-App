
import { error, profile } from "console";
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

// nested validation 
const schema2 =yup.object({
    profile:yup.object({
        firstname:yup.string().required(),
        lastname:yup.string().required(),
    })
})

const task2={
    profile:{
        firstname :"mina",
        lastname :"maher"
    }
}

schema2.validate(task2).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err.errors)

})

// array achievment
const arraySchema =yup.object({
    tags:yup.array()
            .of(yup.string()
                    .strict()
                    .min(2))
                    .test(
                            'not-numeric-only',
                            (value) => {
                                return isNaN(value); 
                            }
                        )
            .min(1,"array must contain at least one element")
});

const arrayTask={
    tags: [123] 
}
arraySchema.validate(arrayTask)
                            .then((data)=>{
                                console.log(data)
                            })
                            .catch(err=> console.log(err.errors[0]))

// asunc validation