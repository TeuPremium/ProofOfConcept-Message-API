import { Router } from "express";
import messageController from "../controllers/messageController";
import validateSchema from "../middlewares/validateSchema"
import messageSchema from "../models/schemas/messageSchema"
import getMessageSchema from "../models/schemas/getMessageSchema"

const messageRouter: Router = Router();

messageRouter.post("/message/", validateSchema(messageSchema), messageController.post )
messageRouter.get("/message/me/recieved/", validateSchema(getMessageSchema), messageController.getRecieved )
messageRouter.get("/message/me/sent/", validateSchema(getMessageSchema), messageController.getSent )


export {
    messageRouter
};