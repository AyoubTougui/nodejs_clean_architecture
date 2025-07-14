import db from "../db/pgClient";

export const ProductRepository = {
  async getAll() {
    const result = await db.query(`SELECT * FROM products`);
    return result.rows;
  },
};
