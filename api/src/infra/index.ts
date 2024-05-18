import { env } from "../utils/dotenv/env";
import { app } from "./http/app";


const PORT = env.variables.SERVER_PORT|| 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});