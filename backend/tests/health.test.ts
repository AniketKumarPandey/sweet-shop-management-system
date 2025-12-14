import request from "supertest";
import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Sweet Shop API is running");
});

describe("GET /", () => {
  it("should return 200 and a status message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Sweet Shop API is running");
  });
});
