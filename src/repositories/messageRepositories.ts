import db from "../config/databaseConfig"

async function addMessage (to: string, from:string, message:string){
   try {
    await db.query(`
    INSERT INTO messages
    ("to", "from", "message" )
    VALUES ($1,$2,$3)
    `, 
    [to, from, message ])
   } catch (error) {
    throw new Error("We could not Post your message. Try again later") 
   }
} 


export default {
    addMessage
}