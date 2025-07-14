import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";
import { validateId } from "../../validators/pricingRuleValidator";

export const deletePricingRule = async (id: number) => {
  const existing = await PricingRuleRepository.getById(id);

  if (!existing) {
    throw new Error("Pricing rule not found");
  }

  const validatedData = validateId(id);
  return PricingRuleRepository.delete(validatedData);
};
