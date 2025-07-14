import db from "../db/pgClient";

export const ProductRuleRepository = {
  async create(rule_id: number, product_ids: number[]) {
    const values: any[] = [];
    const placeholders: string[] = [];

    product_ids.forEach((productId, index) => {
      const i = index * 2;
      values.push(rule_id, productId);
      placeholders.push(`($${i + 1}, $${i + 2})`);
    });

    const result = await db.query(
      `INSERT INTO product_rules (pricing_rule_id, product_id)
        VALUES ${placeholders.join(", ")}
        RETURNING *;`,
      values
    );
    return result.rows;
  },
  async delete(product_id: number) {
    const result = await db.query(`DELETE FROM product_rules WHERE product_id = $1`, [product_id]);
    return result.rows[0];
  },
};
