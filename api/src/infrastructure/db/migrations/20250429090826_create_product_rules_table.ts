import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("product_rules", (table) => {
    table.increments("id").primary();
    table.integer("product_id").unsigned().notNullable(); // Foreign key to products table
    table.integer("pricing_rule_id").unsigned().notNullable(); // Foreign key to pricing_rules table
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    // Foreign keys
    table.foreign("product_id").references("products.id").onDelete("CASCADE");
    table.foreign("pricing_rule_id").references("pricing_rules.id").onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {}
