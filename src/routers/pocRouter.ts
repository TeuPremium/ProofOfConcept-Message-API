import { Router, Request, Response} from "express";
import pocController from "../controllers/pocController";
import validateSchema from "../middlewares/validateSchema"
import messageSchema from "../models/schemas/messageSchema"

const pocRouter: Router = Router();

pocRouter.post("/message/", validateSchema(messageSchema), pocController.pocPost )
pocRouter.get("/message/:id", pocController.pocPost )

export {
    pocRouter
};