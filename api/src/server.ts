import express from "express";
import { connectToDB } from "@infrastructure/db/pgClient";
import routes from "@routes/index";
import { setupSwagger } from "@config/swagger";

const app = express();

// middleware
app.use(express.json());

// connect to db
if (process.env.NODE_ENV !== "test") {
  connectToDB();
}

// routes
app.use("/", routes);

// swagger
setupSwagger(app);

export default app;
