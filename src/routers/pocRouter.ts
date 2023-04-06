import { Router, Request, Response} from "express";
import pocController from "../controllers/pocController";

const pocRouter: Router = Router();

pocRouter.get("/jooj/", pocController.pocGet )



console.log("chegamos no router")

export {
    pocRouter
};