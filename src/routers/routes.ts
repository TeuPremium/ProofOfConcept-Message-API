import { Router } from "express";
import { pocRouter } from "./pocRouter";


const routes: Router = Router();


routes.use("/", pocRouter)

export  {routes};
