import pg from "pg";
import enviroment from "../enviroment";

const { Pool } = pg;

const connectionString:string = process.env.DATABASE_URL || enviroment.DATABASE_URL

const configDataBase = new Pool({
    connectionString
})

export default configDataBase

