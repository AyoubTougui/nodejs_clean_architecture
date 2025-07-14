export enum PricingRuleType {
  Percentage = "percentage",
  Fixed = "fixed_amount",
  Bogo = "bogo",
}

export interface PricingRule {
  id?: number;
  type: PricingRuleType;
  percentage?: number;
  fixed_amount?: number;
  deleted?: boolean;
}
