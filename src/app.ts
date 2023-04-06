import express from "express";
import { router } from "./routers/router";
import cors from "cors"

export class App{
    public server: express.Application;

    constructor(){
        this.server = express();
        this.middleware();
        this.router()
        // this.cors();
    }
    
    // cors(){
    //     this.server.use(cors())
    // }
    
    public router(){
        this.server.use(router)
    }

    private middleware(){
        this.server.use(express.json());
    }
    
}