const mongoose = require("mongoose");

const db = require("./keys").MongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Conectado"))
  .catch((err) => console.log(err));
