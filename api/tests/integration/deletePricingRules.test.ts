import request from "supertest";
import app from "../../src/server";
import { pool } from "../../src/infrastructure/db/pgClient";

let token: string;
let createdRuleId: number;

beforeAll(async () => {
  // 1. Login and get token
  const res = await request(app).post("/auth/login").send({
    username: "manager",
    password: "password",
  });
  token = res.body.token;
});

afterAll(async () => {
  // Clean up test rule
  if (createdRuleId) {
    await pool.query("DELETE FROM pricing_rules WHERE id = $1", [
      createdRuleId,
    ]);
  }
  await pool.end();
});

describe("delete /rule/:id", () => {
  it("should delete a pricing rule", async () => {
    // 2. Create a pricing rule first
    const createRes = await request(app)
      .post("/rule")
      .set("Authorization", `Bearer ${token}`)
      .send({
        type: "percentage",
        percentage: 15,
      });

    createdRuleId = createRes.body.data.id;

    // 3. Delete the pricing rule
    const updateRes = await request(app)
      .delete(`/rule/${createdRuleId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(updateRes.status).toBe(200);
  });
});
