import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("sales", (table) => {
    table.increments("id").primary();
    table.integer("product_id").unsigned().notNullable();
    table.integer("quantity").unsigned().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());

    // Foreign keys
    table.foreign("product_id").references("products.id").onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("sales");
}
