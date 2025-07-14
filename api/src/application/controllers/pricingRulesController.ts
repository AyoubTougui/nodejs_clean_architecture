import { createPricingRule } from "@domain/usecases/pricingRule/createPricingRule";
import { deletePricingRule } from "@domain/usecases/pricingRule/deletePricingRule";
import { getAllPricingRules } from "@domain/usecases/pricingRule/getAllPricingRules";
import { getPricingRuleById } from "@domain/usecases/pricingRule/getPricingRuleById";
import { getPricingRulesBySales } from "@domain/usecases/pricingRule/getPricingRulesBySales";
import { updatePricingRule } from "@domain/usecases/pricingRule/updatePricingRule";
import { Request, Response } from "express";

export const createRule = async (req: Request, res: Response) => {
  try {
    const data = await createPricingRule(req?.body);
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while creating the pricing rule.",
    });
  }
};

export const getRules = async (req: Request, res: Response) => {
  try {
    const data = await getAllPricingRules();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while fetching the pricing rules.",
    });
  }
};

export const getRuleById = async (req: Request, res: Response) => {
  try {
    if (!req.params?.id || !parseInt(req.params?.id)) {
      res.status(400).json({ error: "Please provide a valid Id" });
    }
    const data = await getPricingRuleById(parseInt(req.params?.id));
    if (!data) {
      throw new Error("Pricing rule not found");
    }
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while fetching the pricing rules.",
    });
  }
};

export const updateRule = async (req: Request, res: Response) => {
  try {
    if (!req.params?.id || !parseInt(req.params?.id)) {
      res.status(400).json({ error: "Please provide a valid Id" });
    }
    const data = await updatePricingRule(parseInt(req.params?.id), req.body);
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while updating the pricing rule.",
    });
  }
};

export const deleteRule = async (req: Request, res: Response) => {
  try {
    if (!req.params?.id || !parseInt(req.params?.id)) {
      res.status(400).json({ error: "Please provide a valid Id" });
    }
    const data = await deletePricingRule(parseInt(req.params?.id));
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while deleting the pricing rule.",
    });
  }
};

export const getSalesReport = async (req: Request, res: Response) => {
  try {
    const data = await getPricingRulesBySales();
    res.json({ data });
  } catch (error) {
    console.error("====>", error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while fetching the pricing rules.",
    });
  }
};
