import { Router } from "express";
import { authMiddleware, authorizeRoles } from "@middlewares/authMiddleware";
import {
  createRule,
  deleteRule,
  getRuleById,
  getRules,
  getSalesReport,
  updateRule,
} from "@controllers/pricingRulesController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pricing Rules
 *   description: Endpoints for managing pricing rules
 */

/**
 * @swagger
 * /rule:
 *   post:
 *     summary: Create a new pricing rule
 *     tags: [Pricing Rules]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               percentage:
 *                 type: number
 *               fixed_amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Rule created successfully
 */
// @ts-expect-error
router.post("/", authMiddleware, authorizeRoles(["manager"]), createRule);

/**
 * @swagger
 * /rule/{id}:
 *   put:
 *     summary: Update a pricing rule
 *     tags: [Pricing Rules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Rule ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               percentage:
 *                 type: number
 *               fixed_amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Rule updated successfully
 */
// @ts-expect-error
router.put("/:id", authMiddleware, authorizeRoles(["manager"]), updateRule);

/**
 * @swagger
 * /rule/{id}:
 *   delete:
 *     summary: Delete a pricing rule
 *     tags: [Pricing Rules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Rule ID
 *     responses:
 *       200:
 *         description: Rule deleted successfully
 */
// @ts-expect-error
router.delete("/:id", authMiddleware, authorizeRoles(["manager"]), deleteRule);

/**
 * @swagger
 * /rule:
 *   get:
 *     summary: Get all pricing rules
 *     tags: [Pricing Rules]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of pricing rules
 */

router.get(
  "/",
  //@ts-expect-error
  authMiddleware,
  authorizeRoles(["manager", "analyst"]),
  getRules,
);

/**
 * @swagger
 * /rule/sales:
 *   get:
 *     summary: Get pricing rule sales effectiveness
 *     tags: [Pricing Rules]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of rules with sales effectiveness
 */
router.get(
  "/sales",
  // @ts-expect-error
  authMiddleware,
  authorizeRoles(["manager", "analyst"]),
  getSalesReport,
);

/**
 * @swagger
 * /rule/{id}:
 *   get:
 *     summary: Get a pricing rule by ID
 *     tags: [Pricing Rules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Rule ID
 *     responses:
 *       200:
 *         description: Pricing rule data
 */
router.get(
  "/:id",
  // @ts-expect-error
  authMiddleware,
  authorizeRoles(["manager", "analyst"]),
  getRuleById,
);

export default router;
