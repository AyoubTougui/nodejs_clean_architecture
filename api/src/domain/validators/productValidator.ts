import db from "@infrastructure/db/pgClient";

export const validateProductIds = async (productIds: number[]) => {
  const placeholders = productIds.map((_, i) => `$${i + 1}`).join(", ");

  const result = await db.query(
    `SELECT id FROM products WHERE id IN (${placeholders})`,
    productIds,
  );

  const existingIds = result.rows.map((row) => row.id);
  const invalidIds = productIds.filter((id) => !existingIds.includes(id));

  if (invalidIds.length > 0) {
    throw new Error(`Invalid product IDs: ${invalidIds.join(", ")}`);
  }
};
