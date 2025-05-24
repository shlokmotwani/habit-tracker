import { PrismaClient } from "../../generated/prisma/client.js";
const prisma = new PrismaClient();

async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { message: "Email address not found.", user: null };
    }
    return { message: "User found.", user };
  } catch (error) {
    console.error("Error while fetching user.", error);
    return { message: "Error fetching user.", error, user: null };
  }
}

async function createUser(user) {
  try {
    const response = await prisma.user.create({ data: user });
    return { message: "User created successfully.", response };
  } catch (error) {
    console.error("Error while creating user.", error);
    return { message: "Error while creating user.", error };
  }
}

async function fetchUser(req, res) {
  try {
    const email = req.params.email;
    const { user, message, error } = await getUserByEmail(email);
    if (error) return res.status(500).json({ message, error });
    if (!user) return res.status(404).json({ message });
    res.status(200).json({ message, user });
  } catch (error) {
    console.error("Error while fetching user.", error);
    res.status(500).json({ message: "Error while fetching user.", error });
  }
}

async function updateUser(req, res) {
  try {
    const oldEmail = req.params.email;
    const { name, email, password } = req.body;
    const data = { name, email, password };
    const response = await prisma.user.update({
      where: { email: oldEmail },
      data,
    });
    res.status(200).json({ message: "User updated successfully.", response });
  } catch (error) {
    console.error("Error while updating user.", error);
    res.status(500).json({ message: "Error while updating user.", error });
  }
}

async function deleteUser(req, res) {
  try {
    const email = req.params.email;
    await prisma.user.delete({ where: { email } });
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error while deleting user.", error);
    res.status(500).json({ message: "Error while deleting user.", error });
  }
}

export { getUserByEmail, createUser, fetchUser, updateUser, deleteUser };
