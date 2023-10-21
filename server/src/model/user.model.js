const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      required: "Email is required",
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
