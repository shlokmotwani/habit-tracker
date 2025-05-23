import bcrypt from "bcryptjs";

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function comparePasswords(password, hash) {
  return await bcrypt.compare(password, hash);
}

export { hashPassword, comparePasswords };
