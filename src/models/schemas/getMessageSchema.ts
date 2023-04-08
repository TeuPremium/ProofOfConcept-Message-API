import joi from "joi";

const getMessageSchema = joi.object({
    email : joi.string().email().required(),
})

export default getMessageSchema