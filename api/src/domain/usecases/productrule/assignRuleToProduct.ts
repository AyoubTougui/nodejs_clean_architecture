import { PricingRuleRepository } from "@infrastructure/repositories/PricingRuleRepository";
import { ProductRuleRepository } from "@infrastructure/repositories/ProductRuleRepository";
import { validateId } from "../../validators/pricingRuleValidator";
import { validateProductIds } from "../../validators/productValidator";

export const assignRuleToProducts = async (
  rule_id: number,
  product_ids: number[],
) => {
  const valid_rule_id = validateId(rule_id);
  const valid_product_ids = product_ids.map((el) => validateId(el));

  const validRule = await PricingRuleRepository.getById(valid_rule_id);
  if (!validRule) {
    throw new Error("Pricing rule not found");
  }

  validateProductIds(valid_product_ids);

  return ProductRuleRepository.create(valid_rule_id, valid_product_ids);
};
