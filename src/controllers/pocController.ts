import { Request, Response } from "express"
import db from "../config/databaseConfig"
import messageRepositories from "../repositories/messageRepositories"

async function pocPost(req: Request, res: Response){
    try {
        const { to, from, message } = req.body
        
       messageRepositories.addMessage(to, from, message)

        return res.json(
            {message: `Your message was sent to ${to}`}
        )
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }   
}

export default{
    pocPost
}