// application Express
// importer express
const express = require("express");
// appeler la methode express
const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

const path = require("path");

mongoose
  .connect(
    "mongodb+srv://farrah1:nMUbA9HJfQFXlpdI@cluster0.tp84wve.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
// midlware grl: ajout header autorisation: permet a lapp d'acceder a l api
app.use((req, res, next) => {
  // d'accéder à notre API depuis n'importe quelle origine ( '*' )
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

// exporter l'app pour y acceder depuis d'autre fichier server.js
module.exports = app;
