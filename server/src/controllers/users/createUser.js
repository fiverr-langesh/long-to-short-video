const { User } = require("../../model/user.model");

async function createUser(req, res) {
  try {
    const { email, name } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, name });
    return res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { createUser };
