import request from "supertest";
import app from "../../src/server";
import { pool } from "../../src/infrastructure/db/pgClient";

let token: string;

beforeAll(async () => {
  // 1. Login and get token
  const res = await request(app).post("/auth/login").send({
    username: "manager",
    password: "password",
  });
  token = res.body.token;
});

beforeEach(async () => {
  await pool.query("DELETE FROM pricing_rules");
});

afterAll(async () => {
  await pool.end();
});

describe("get /rule", () => {
  it("fetch pricing rules", async () => {
    // 2. Create a pricing rule first
    const createRes = await request(app)
      .post("/rule")
      .set("Authorization", `Bearer ${token}`)
      .send({
        type: "percentage",
        percentage: 15,
      });

    // 3. Fetch the pricing rules
    const updateRes = await request(app)
      .get(`/rule`)
      .set("Authorization", `Bearer ${token}`);

    expect(updateRes.status).toBe(200);
  });
});
