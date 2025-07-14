import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";
import { validateId } from "../../validators/pricingRuleValidator";

export const getPricingRuleById = async (id: number) => {
  const validatedData = validateId(id);
  return PricingRuleRepository.getById(validatedData);
};
