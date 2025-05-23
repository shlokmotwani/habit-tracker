import { generateToken, verifyToken } from "../utils/jwt";

describe("JWT Token", () => {
  const payload = { name: "Dummy User", email: "dummyuser123@gmail.com" };

  it("should generate and verify token correctly", async () => {
    const token = await generateToken(payload);
    expect(typeof token).toBe("string");

    const decoded = await verifyToken(token);
    expect(decoded.name).toBe(payload.name);
    expect(decoded.email).toBe(payload.email);
  });

  it("should throw error on invalid token", async () => {
    expect(() => verifyToken("invalid.token")).toThrow();
  });
});
