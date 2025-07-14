import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";
import {
  validateId,
  validatePricingRule,
} from "../../validators/pricingRuleValidator";

export const updatePricingRule = async (id: number, data: any) => {
  const validatedId = validateId(id);
  const validatedRule = validatePricingRule(data);

  const existing = await PricingRuleRepository.getById(id);

  if (!existing) {
    throw new Error("Pricing rule not found");
  }

  return PricingRuleRepository.update(validatedId, validatedRule);
};
