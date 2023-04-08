import { Request, Response } from "express"
import db from "../config/databaseConfig"

async function pocPost(req: Request, res: Response){
    try {
        const { to, from, message } = req.body
        
        await db.query(`
        INSERT INTO messages
        ("to", "from", "message" )
        VALUES ($1,$2,$3)
        `, [to, from, message ]
    )

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