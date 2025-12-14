import request from "supertest";
import app from "../src/app";
import User from "../src/models/User";

// MOCK THE USER MODEL
jest.mock("../src/models/User", () => ({
  findOne: jest.fn(),
  create: jest.fn(),
}));

describe("POST /api/auth/register", () => {
  it("should register a new user and return email", async () => {
    (User.findOne as jest.Mock).mockResolvedValue(null);
    (User.create as jest.Mock).mockResolvedValue({
      email: "test@example.com",
    });

    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: "test@example.com",
        password: "password123",
      });

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ email: "test@example.com" });
  });
});
