const express = require("express");
const registerApi = require("./routes/register");
const loginApi = require("./routes/login");
const dashboard = require("./routes/dashboard");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(dashboard);

module.exports = router;
