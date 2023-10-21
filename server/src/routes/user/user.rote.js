const express = require("express");
const { createUser } = require("../../controllers/createUser");
const { getUser } = require("../../controllers/getUser");
const router = express.Router();

router.get("/:email", getUser);
router.post("/", createUser);

module.exports = { userRouter: router };
