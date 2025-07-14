import { getPricingRulesBySales } from "../../src/domain/usecases/pricingRule/getPricingRulesBySales";
import { PricingRuleRepository } from "../../src/infrastructure/repositories/PricingRuleRepository";

jest.mock("../../src/infrastructure/repositories/PricingRuleRepository");

describe("getPricingRulesSalesReport", () => {
  it("should return all pricing rules based on sales", async () => {
    const mockRules = [
      {
        pricing_rule_id: 14,
        pricing_rule_type: "bogo",
        total_sales: "44",
        total_quantity_sold: "1207",
      },
      {
        pricing_rule_id: 12,
        pricing_rule_type: "percentage",
        total_sales: "17",
        total_quantity_sold: "516",
      },
    ];
    (PricingRuleRepository.getSalesReport as jest.Mock).mockResolvedValue(
      mockRules,
    );

    const result = await getPricingRulesBySales();

    expect(result).toEqual(mockRules);
    expect(PricingRuleRepository.getSalesReport).toHaveBeenCalled();
  });
});
