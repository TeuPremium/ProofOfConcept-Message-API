import { App } from "./app";

const PORT = process.env.PORT || 5000

new App().server.listen(PORT, () => console.log("running on: " + PORT));


