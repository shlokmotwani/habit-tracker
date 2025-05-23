import * as userService from "../services/userService.js";

async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: "User created successfully.", user });
  } catch (error) {
    console.error("Error while creating user.", error);
    res
      .status(500)
      .json({ message: "Error while creating user.", error: error.message });
  }
}

async function fetchUser(req, res) {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    if (!user) return res.status(404).json({ message: "User not found." });
    res.status(200).json({ user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching user.", error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const user = await userService.updateUser(req.params.email, req.body);
    res.status(200).json({ message: "User updated successfully.", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating user.", error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    await userService.deleteUser(req.params.email);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting user.", error: err.message });
  }
}

export { createUser, fetchUser, updateUser, deleteUser };
