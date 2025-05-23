import { PrismaClient } from "../../generated/prisma/client.js";
const prisma = new PrismaClient();

async function createUser(user) {
  return await prisma.user.create({ data: user });
}

async function getUserByEmail(email) {
  return await prisma.user.findUnique({ where: { email } });
}

async function updateUser(email, data) {
  return await prisma.user.update({ where: { email }, data });
}

async function deleteUser(email) {
  return await prisma.user.delete({ where: { email } });
}

export { createUser, getUserByEmail, updateUser, deleteUser };
