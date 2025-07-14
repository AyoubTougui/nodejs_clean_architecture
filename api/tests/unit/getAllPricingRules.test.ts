import { getAllPricingRules } from "../../src/domain/usecases/pricingRule/getAllPricingRules";
import { PricingRuleRepository } from "../../src/infrastructure/repositories/PricingRuleRepository";

jest.mock("../../src/infrastructure/repositories/PricingRuleRepository");

describe("getAllPricingRules", () => {
  it("should return all pricing rules", async () => {
    const mockRules = [{ id: 1 }, { id: 2 }];
    (PricingRuleRepository.getAll as jest.Mock).mockResolvedValue(mockRules);

    const result = await getAllPricingRules();

    expect(result).toEqual(mockRules);
    expect(PricingRuleRepository.getAll).toHaveBeenCalled();
  });
});
