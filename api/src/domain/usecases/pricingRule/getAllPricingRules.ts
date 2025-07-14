import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";

export const getAllPricingRules = async () => {
  return PricingRuleRepository.getAll();
};
