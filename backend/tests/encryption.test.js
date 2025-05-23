import { comparePasswords, hashPassword } from "../utils/encryption.js";

describe("Password Hashing", () => {
  it("should hash a password and match the original", async () => {
    const plain = "dummyPassword@1234";
    const hashed = await hashPassword(plain);

    expect(hashed).not.toBe(plain);
    const match = await comparePasswords(plain, hashed);
    expect(match).toBe(true);
  });

  it("should fail if password is incorrect", async () => {
    const plain = "dummyPassword@1234";
    const hashed = await hashPassword(plain);

    const match = await comparePasswords("anotherPASSWORD", hashed);
    expect(match).toBe(false);
  });
});
