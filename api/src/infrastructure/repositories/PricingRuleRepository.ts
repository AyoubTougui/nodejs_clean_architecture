import { PricingRule, PricingRuleType } from "@domain/entities/PricingRule";
import db from "../db/pgClient";

export const PricingRuleRepository = {
  async create(rule: PricingRule) {
    const { type } = rule;

    const percentage =
      type === PricingRuleType.Percentage ? rule.percentage : 0;
    const fixed_amount = type === PricingRuleType.Fixed ? rule.fixed_amount : 0;

    const result = await db.query(
      `INSERT INTO pricing_rules (type, percentage, fixed_amount, deleted)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [type, percentage, fixed_amount, false],
    );
    return result.rows[0];
  },
  async getAll() {
    const result = await db.query(`SELECT * FROM pricing_rules`);
    return result.rows;
  },
  async getById(id: number) {
    const result = await db.query(`SELECT * FROM pricing_rules WHERE id = $1`, [
      id,
    ]);
    return result.rows[0];
  },
  async update(id: number, updates: Partial<PricingRule>) {
    const fields: string[] = [];
    const values: any[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(updates)) {
      fields.push(`${key} = $${index}`);
      values.push(value);
      index++;
    }

    values.push(id);

    const result = await db.query(
      `UPDATE pricing_rules SET ${fields.join(", ")} WHERE id = $${index} RETURNING *`,
      values,
    );
    return result.rows[0];
  },
  async delete(id: number) {
    const result = await db.query(
      `UPDATE pricing_rules SET deleted = false WHERE id = $1 RETURNING *`,
      [id],
    );
    return result.rows[0];
  },
  async getSalesReport() {
    const results = await db.query(
      `
      SELECT 
      pr.id AS pricing_rule_id,
      pr.type AS pricing_rule_type,
      COUNT(s.id) AS total_sales,  
      SUM(s.quantity) AS total_products_sold
      FROM 
          product_rules prd
      JOIN 
          pricing_rules pr ON prd.pricing_rule_id = pr.id
      JOIN 
          products p ON prd.product_id = p.id
      JOIN 
          sales s ON s.product_id = p.id
      GROUP BY 
          pr.id, pr.type
      ORDER BY 
          total_products_sold DESC;
      `,
    );
    return results.rows;
  },
};
