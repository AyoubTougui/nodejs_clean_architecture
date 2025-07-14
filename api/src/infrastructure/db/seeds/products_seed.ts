import { faker } from "@faker-js/faker";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  const products = Array.from({ length: 10 }).map(() => ({
    name: faker.commerce.productName(),
    created_at: new Date(),
    updated_at: new Date(),
  }));

  await knex("products").insert(products);
}
