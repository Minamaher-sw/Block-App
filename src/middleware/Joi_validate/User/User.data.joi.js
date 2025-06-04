import Joi from "joi";

const task = {
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .trim()
        .messages({
        'string.base': 'Username must be a string',
        'string.empty': 'Username is required',
        'string.min': 'Username must be at least 3 characters',
        'string.max': 'Username must not exceed 30 characters',
        'any.required': 'Username is required'
        }),

    email: Joi.string()
        .trim()
        .required()
        .email()
        .messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required'
        }),

    password: Joi.string()
        .min(6)
        .max(50)
        .required()
        .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
        'string.max': 'Password must not exceed 50 characters',
        'any.required': 'Password is required'
        })
};

const updateUserSchema=Joi.object({
    ...{
        username: task.username.optional(),
        email: task.email.optional(),
        password: task.password.optional()
    }
}).or("email","password" , "username");

const userJOISchema = Joi.object(task);

export{
    updateUserSchema,
    userJOISchema
}