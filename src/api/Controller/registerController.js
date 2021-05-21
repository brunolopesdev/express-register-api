const express = require("express");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const alreadyExistsUser = await User.findOne({ email: email }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "Esse e-mail já está cadastrado!" });
  }

  const newUser = new User({ name, email, password });

  bcrypt.genSalt(10, (err, salt) =>
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) console.locg(err);
      newUser.password = hash;

      const savedUser = newUser
        .save()
        .then((user) => {
          res.status(201).json({ message: "Obrigado por se registrar!" });
        })
        .catch((err) => {
          console.log("Error: ", err);
          res
            .status(500)
            .json({ error: "Não foi possível concluir o cadastro!" });
        });
    })
  );
};

module.exports = {
  register,
};
