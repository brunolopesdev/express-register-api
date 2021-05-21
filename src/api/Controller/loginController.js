const express = require("express");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  // verificando email
  const userWithEmail = await User.findOne({ email: email }).then(
    (userWithEmail) => {
      if (!userWithEmail) {
        return res.json({ message: "Email ou senha incorretos!" });
      }

      // jwt token
      const jwtToken = jwt.sign(
        { id: User.id, email: User.email },
        process.env.JWT_SECRET
      );

      // Verificando a senha
      bcrypt.compare(password, userWithEmail.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          return res.json({
            message: `Bem vindo, ${userWithEmail.name}`,
            token: jwtToken,
          });
        } else {
          return res.json({ message: "Email ou senha incorretos!" });
        }
      });
    }
  );
};

module.exports = {
  login,
};
