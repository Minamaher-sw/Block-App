import Joi from "joi";

const task ={
    content:Joi.string().required().min(1).max(300).message({
        'string.base': 'Comment must be a string',
        'string.empty': 'Comment is required',
        'string.min': 'Comment must be at least 1 characters',
        'string.max': 'Comment must not exceed 300 characters',
        'any.required': 'Comment is required'
    })
}

export const CommentJoiSchema =Joi.object(task);