import { Router } from "express";
import { authMiddleware, authorizeRoles } from "@middlewares/authMiddleware";
import { getProducts } from "@controllers/productsController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management and listing
 */

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of products retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get(
  "/",
  // @ts-expect-error
  authMiddleware,
  authorizeRoles(["manager", "analyst"]),
  getProducts,
);

export default router;
