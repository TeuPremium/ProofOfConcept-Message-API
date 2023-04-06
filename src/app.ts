import express from "express";
import { routes } from "./routers/routes";
import cors from "cors"

export class App{
    public server: express.Application;

    constructor(){
        this.server = express();
        this.middleware();
        this.router()
        this.cors();
    }
    
    cors(){
        this.server.use(cors())
    }
    
    public router(){
        this.server.use(routes)
    }

    private middleware(){
        this.server.use(express.json());
    }
    
}