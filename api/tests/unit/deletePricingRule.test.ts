import { deletePricingRule } from "../../src/domain/usecases/pricingRule/deletePricingRule";
import { PricingRuleRepository } from "../../src/infrastructure/repositories/PricingRuleRepository";

jest.mock("../../src/infrastructure/repositories/PricingRuleRepository");

describe("deletePricingRule", () => {
  it("should delete a pricing rule", async () => {
    const mockRule = { id: 1, type: "percentage", value: 10 };
    const mockResult = { id: 1, deleted: true };

    (PricingRuleRepository.getById as jest.Mock).mockResolvedValue(mockRule);
    (PricingRuleRepository.delete as jest.Mock).mockResolvedValue(mockResult);

    const result = await deletePricingRule(1);

    expect(result).toEqual(mockResult);
    expect(PricingRuleRepository.delete).toHaveBeenCalledWith(1);
  });
});
