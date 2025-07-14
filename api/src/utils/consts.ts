import dotenv from "dotenv";

dotenv.config();

export const API_PORT = process.env.API_PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;
export const TOKEN_DEFAULT_EXPIRATION = 3600;
