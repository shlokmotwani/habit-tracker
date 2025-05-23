import { PrismaClient } from "../../generated/prisma/client.js"
const prisma = new PrismaClient();

async function createUser(user) {
  try {
    const response = await prisma.user.create({ data: user });
    return { message: "User created successfully.", response };
  } catch (error) {
    console.error("Error while creating user.", error);
    return { message: "Error while creating user.", error };
  }
}

async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { message: "Email address not found." };
    }
    return { message: "User fetched successfully.", user };
  } catch (error) {
    console.error("Error while fetching user.", error);
    return { message: "Error while fetching user.", error };
  }
}

async function updateUser(email, data) {
  try {
    const response = await prisma.user.update({ where: { email }, data });
    return { message: "User updated successfully.", response };
  } catch (error) {
    console.error("Error while updating user.", error);
    return { message: "Error while updating user.", error };
  }
}

async function deleteUser(email) {
  try {
    await prisma.user.delete({ where: { email } });
    return { message: "User deleted successfully." };
  } catch (error) {
    console.error("Error while deleting user.", error);
    return { message: "Error while deleting user.", error };
  }
}

export { createUser, getUserByEmail, updateUser, deleteUser };
