import { ProductRuleRepository } from "../../../infrastructure/repositories/ProductRuleRepository";
import { validateId } from "../../validators/pricingRuleValidator";
import { validateProductIds } from "../../validators/productValidator";

export const removeRuleFromProduct = async (product_id: number) => {
  const valid_product_id = validateId(product_id);

  validateProductIds([valid_product_id]);

  return ProductRuleRepository.delete(valid_product_id);
};
