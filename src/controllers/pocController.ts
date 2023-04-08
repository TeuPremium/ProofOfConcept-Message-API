import { Request, Response } from "express"
import db from "../config/databaseConfig"

async function pocPost(req: Request, res: Response){
    try {
        const { rows } = await db.query(`select * from users`)
        const user = rows[0]
        return res.json(
            user
        )
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }

      
}

export default{
    pocPost
}