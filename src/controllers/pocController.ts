import { Request, Response } from "express"

function pocGet(req: Request, res: Response){
    console.log("testandow")
    return res.json({
        message: "jooj"
    })
}

export default{
    pocGet
}