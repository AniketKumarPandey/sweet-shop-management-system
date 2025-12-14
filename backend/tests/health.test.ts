import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return 200 and a status message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Sweet Shop API is running");
  });
});
