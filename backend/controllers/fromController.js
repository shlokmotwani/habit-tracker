function validateSignUpForm(req, res, next) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(403).json({ message: "All fields are required" });
  }
  next();
}

export { validateSignUpForm };
