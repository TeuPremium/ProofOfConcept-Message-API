import dotenv from "dotenv"
import { App } from "./app";
import enviroment from "./enviroment"

const PORT = enviroment.PORT || 5000




new App().server.listen(PORT, () => console.log("running on: " + PORT));


