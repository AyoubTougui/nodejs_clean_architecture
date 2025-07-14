import { PricingRule, PricingRuleType } from "../entities/PricingRule";

export const validatePricingRule = (data: any): PricingRule => {
  if (!data) {
    throw new Error("No data provided");
  }
  const { type, percentage, fixed_amount } = data;

  if (!Object.values(PricingRuleType).includes(type as PricingRuleType)) {
    throw new Error("Invalid pricing rule type.");
  }

  if (
    type === PricingRuleType.Percentage &&
    (typeof percentage !== "number" || percentage <= 0 || percentage > 100)
  ) {
    throw new Error("Percentage must be a number between 1 and 100.");
  }

  if (type === PricingRuleType.Fixed && (typeof fixed_amount !== "number" || fixed_amount <= 0)) {
    throw new Error("Amount must be a positive number for fixed discount.");
  }

  return data;
};

export const validateId = (id: number): number => {
  if (typeof id !== "number") {
    throw new Error("Please provide a valid Id");
  }
  return id;
};
