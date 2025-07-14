import request from "supertest";
import app from "../../src/server";
import { pool } from "../../src/infrastructure/db/pgClient";

let token: string;

beforeEach(async () => {
  await pool.query("DELETE FROM pricing_rules");
});

afterAll(async () => {
  await pool.end();
});

beforeAll(async () => {
  const res = await request(app).post("/auth/login").send({
    username: "manager",
    password: "password",
  });
  token = res.body.token;
});

describe("POST /rule", () => {
  it("should create a new pricing rule", async () => {
    const newRule = {
      type: "percentage",
      percentage: 10,
    };

    const response = await request(app)
      .post("/rule")
      .set("Authorization", `Bearer ${token}`)
      .send(newRule)
      .expect(200);

    expect(response.body.data).toMatchObject({
      type: "percentage",
      percentage: "10.00",
    });
  });

  it("should return 400 if data is invalid", async () => {
    const badRule = {
      type: "wrong",
    };

    const response = await request(app)
      .post("/rule")
      .set("Authorization", `Bearer ${token}`)
      .send(badRule)
      .expect(400);

    expect(response.body.error).toBeDefined();
  });
});
