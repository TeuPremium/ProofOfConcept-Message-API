import joi from "joi";

const messageSchema = joi.object({
    to : joi.string().required(),
    from: joi.string().email().required(),
    message: joi.string().required()
})

export default messageSchema