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

async function recievedMessages (email: string){
    try {
     const {rows} = await db.query(`
        SELECT * FROM messages
        WHERE "to" = $1
     `, 
     [ email ])

     return rows
    } catch (error) {
     throw new Error("We could not find your messages. Try again later") 
    }
 } 

 async function sentMessages (email: string){
    try {
     const {rows} = await db.query(`
        SELECT * FROM messages
        WHERE "from" = $1
     `, 
     [ email ])

     return rows
    } catch (error) {
     throw new Error("We could not find your messages. Try again later") 
    }
 } 


export default {
    addMessage,
    recievedMessages,
    sentMessages
}