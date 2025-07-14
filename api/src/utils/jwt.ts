import jwt from "jsonwebtoken";
import { JWT_SECRET, TOKEN_DEFAULT_EXPIRATION } from "./consts";

export const generateToken = (payload: object, expiresIn = TOKEN_DEFAULT_EXPIRATION) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
