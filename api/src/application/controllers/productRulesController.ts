import { assignRuleToProducts } from "@domain/usecases/productrule/assignRuleToProduct";
import { removeRuleFromProduct } from "@domain/usecases/productrule/removeRuleFromProduct";
import { Request, Response } from "express";

export const createProductRule = async (req: Request, res: Response) => {
  try {
    const { rule_id, product_ids } = req?.body;
    if (!rule_id || !product_ids) {
      res
        .status(400)
        .json({ error: "Please provide a valid rule_id and product_ids" });
    }
    const data = await assignRuleToProducts(parseInt(rule_id), product_ids);
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while creating the product rule.",
    });
  }
};

export const deleteProductRule = async (req: Request, res: Response) => {
  try {
    const { product_id } = req?.body;
    if (!product_id) {
      res.status(400).json({ error: "Please provide a valid product_id" });
    }
    const data = await removeRuleFromProduct(parseInt(product_id));
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while deleting the product rule.",
    });
  }
};
