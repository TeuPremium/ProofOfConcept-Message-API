import { Request, Response } from "express"

function pocGet(req: Request, res: Response){
    return res.json({
        message: "jooj"
    })
}

export default{
    pocGet
}