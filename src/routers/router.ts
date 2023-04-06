import { Router, Request, Response} from "express";
import pocController from "../controllers/pocController";

const router: Router = Router();

router.get("/", () => {console.log ("a")} )



console.log("chegamos no router")

export {
    router
};