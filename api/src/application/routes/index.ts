import { Router } from "express";
import authRoutes from "./authRoutes";
import rulesRoutes from "./pricingRulesRoutes";
import productsRoutes from "./productsRoutes";
import productRulesRoutes from "./productRulesRoutes";

const router = Router();
router.use("/auth", authRoutes);
router.use("/rule", rulesRoutes);
router.use("/product", productsRoutes);
router.use("/product-rule", productRulesRoutes);

export default router;
