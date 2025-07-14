import { Router } from "express";
import { authMiddleware, authorizeRoles } from "@middlewares/authMiddleware";
import {
  createProductRule,
  deleteProductRule,
} from "@controllers/productRulesController";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Product Rules
 *   description: Assign or remove pricing rules to products
 */

/**
 * @swagger
 * /product-rule:
 *   post:
 *     summary: Assign a pricing rule to a product
 *     tags: [Product Rules]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product_id
 *               - rule_id
 *             properties:
 *               product_id:
 *                 type: integer
 *               rule_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Rule assigned to product successfully
 */
router.post(
  "/",
  // @ts-expect-error
  authMiddleware,
  authorizeRoles(["manager"]),
  createProductRule,
);

/**
 * @swagger
 * /product-rule:
 *   delete:
 *     summary: Remove a pricing rule from a product
 *     tags: [Product Rules]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product_id
 *             properties:
 *               product_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Rule removed from product successfully
 */
router.delete(
  "/",
  // @ts-expect-error
  authMiddleware,
  authorizeRoles(["manager"]),
  deleteProductRule,
);

export default router;
