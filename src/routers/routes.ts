import { Router } from "express";
import {messageRouter} from "./messageRouter"


const routes: Router = Router();


routes.use("/", messageRouter)

export  {routes};
