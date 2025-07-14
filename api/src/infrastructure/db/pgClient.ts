import { Pool } from "pg";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../../utils/consts";

export const pool = new Pool({
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432", 10),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export const connectToDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Database connected successfully");
    client.release();
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
};

export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
