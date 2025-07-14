import { createPricingRule } from "../../src/domain/usecases/pricingRule/createPricingRule";
import { PricingRuleRepository } from "../../src/infrastructure/repositories/PricingRuleRepository";

jest.mock("../../src/infrastructure/repositories/PricingRuleRepository");

describe("createPricingRule", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create and return a new pricing rule", async () => {
    const input = {
      type: "percentage",
      percentage: 10,
    };

    const fakeResult = { id: 1, ...input, active: true };

    (PricingRuleRepository.create as jest.Mock).mockResolvedValue(fakeResult);

    const result = await createPricingRule(input);

    expect(result).toEqual(fakeResult);
    expect(PricingRuleRepository.create).toHaveBeenCalledWith(input);
  });
});
