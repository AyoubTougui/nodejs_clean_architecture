import { updatePricingRule } from "../../src/domain/usecases/pricingRule/updatePricingRule";
import { PricingRuleRepository } from "../../src/infrastructure/repositories/PricingRuleRepository";

jest.mock("../../src/infrastructure/repositories/PricingRuleRepository");

describe("updatePricingRule", () => {
  it("should update a pricing rule", async () => {
    const existingRule = { id: 1, type: "percentage", value: 10 };
    const updates = { type: "percentage", percentage: 15 };
    const mockRule = { id: 1, type: "percentage", percentage: 15 };

    (PricingRuleRepository.getById as jest.Mock).mockResolvedValue(
      existingRule,
    );
    (PricingRuleRepository.update as jest.Mock).mockResolvedValue(mockRule);

    const result = await updatePricingRule(1, updates);

    expect(result).toEqual(mockRule);
    expect(PricingRuleRepository.update).toHaveBeenCalledWith(1, updates);
  });
});
