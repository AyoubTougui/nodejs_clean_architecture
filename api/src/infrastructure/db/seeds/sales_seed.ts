import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("sales").del();

  // Fetch valid product IDs
  const { rows: products } = await knex.raw("SELECT id FROM products");

  const sales = [];

  for (let i = 0; i < 100; i++) {
    const productId = products[Math.floor(Math.random() * (products.length - 1)) + 1].id; // 1 to 10
    const quantity = Math.floor(Math.random() * 50) + 1; // 1 to 50

    sales.push({
      product_id: productId,
      quantity,
    });
  }

  await knex("sales").insert(sales);
}
