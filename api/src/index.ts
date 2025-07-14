import app from "./server";
import { API_PORT } from "./utils/consts";

app.listen(API_PORT, () => console.log(`API started on port ${API_PORT}`));
