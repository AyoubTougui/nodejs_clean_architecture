import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";
import { validatePricingRule } from "../../validators/pricingRuleValidator";

export const createPricingRule = async (rule: any) => {
  const validatedData = validatePricingRule(rule);
  return PricingRuleRepository.create(validatedData);
};
