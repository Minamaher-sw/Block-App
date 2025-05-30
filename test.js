
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
