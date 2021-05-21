const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("Você está na sua Dashboard");
  }
);

module.exports = router;
