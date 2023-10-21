const express = require("express");
const { getUser } = require("../../controllers/users/getUser");
const { createUser } = require("../../controllers/users/createUser");
const router = express.Router();

router.get("/:email", getUser);
router.post("/", createUser);

module.exports = { userRouter: router };
