const express = require("express");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginController = require("../Controller/loginController");

const router = express.Router();

router.post("/login", loginController.login);

module.exports = router;
