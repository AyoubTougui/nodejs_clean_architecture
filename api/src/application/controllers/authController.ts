import { users } from "@utils/staticUsers";
import { generateToken } from "@utils/jwt";
import { NextFunction, Request, Response } from "express";

export const login = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body?.username || !req.body?.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const user = users.find(
    (u) =>
      u.username === req.body?.username && u.password === req.body?.password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({ username: user.username, role: user.role });
  return res.json({ token });
};
