import { Router } from "express";
import { login } from "@controllers/authController";

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login Manager
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *              username: manager
 *              password: password
 *     responses:
 *       200:
 *         description: Logged in successfully
 */
// @ts-expect-error
router.post("/login", login);

export default router;
