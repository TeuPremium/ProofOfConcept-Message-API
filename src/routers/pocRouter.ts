import { Router, Request, Response} from "express";
import pocController from "../controllers/pocController";
import validateSchema from "../middlewares/validateSchema"
import messageSchema from "../models/schemas/messageSchema"

const pocRouter: Router = Router();

pocRouter.post("/jooj/", validateSchema(messageSchema), pocController.pocPost )

export {
    pocRouter
};