import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("pricing_rules", (table) => {
    table.increments("id").primary();
    table.enum("type", ["percentage", "fixed_amount", "bogo"]).notNullable();
    table.decimal("percentage", 5, 2);
    table.decimal("fixed_amount", 10, 2);
    table.boolean("deleted").defaultTo(false); //soft delete
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("pricing_rules");
}
