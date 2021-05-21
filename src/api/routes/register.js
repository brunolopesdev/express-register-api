const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const registerController = require("../Controller/registerController");

const router = express.Router();

router.post("/register", registerController.register);

module.exports = router;
