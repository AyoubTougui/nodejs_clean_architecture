import { getPricingRuleById } from "../../src/domain/usecases/pricingRule/getPricingRuleById";
import { PricingRuleRepository } from "../../src/infrastructure/repositories/PricingRuleRepository";

jest.mock("../../src/infrastructure/repositories/PricingRuleRepository");

describe("getPricingRuleById", () => {
  it("should return a pricing rule by ID", async () => {
    const mockRule = { id: 1, type: "fixed", value: 10 };
    (PricingRuleRepository.getById as jest.Mock).mockResolvedValue(mockRule);

    const result = await getPricingRuleById(1);

    expect(result).toEqual(mockRule);
    expect(PricingRuleRepository.getById).toHaveBeenCalledWith(1);
  });
});
