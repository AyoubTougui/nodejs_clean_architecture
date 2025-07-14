import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";

export const getPricingRulesBySales = async () => {
  return PricingRuleRepository.getSalesReport();
};
