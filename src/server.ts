import dotenv from "dotenv";

import { app } from "./app";

dotenv.config({ path: "./variables.env" });

app.set("port", process.env.PORT || 3333);

app.listen(app.get("port"), () => {
    console.log(`Servidor rodandoo na porta: ${app.get("port")}`);
});
