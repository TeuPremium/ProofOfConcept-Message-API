import { Router, Request, Response} from "express";
import pocController from "../controllers/pocController";

const router: Router = Router();

router.get("/", pocController.pocGet )



console.log("chegamos no router")

export {
    router
};