// Realizar un sistema de gestión de usuarios y hobbies, deberán utilizar sequelize, para realizar los modelos, debe cumplir con modularización, o sea separar la lógica en archivos, para gestionar los usuarios y hobbies deberán crear una estructura CRUD para cada uno, igual al primer bimestre, deberán tener una relación de muchos a muchos con usuarios y hobbies

//agregar el campo edad a usuarios y buscar al usuario mas grande atraves de un endpoint

const express = require("express");
const server = express();
require("./models/index");
const { sequelize } = require("./config/db.js");
const usersRoutes = require("./routes/users.routes.js");
const hobbiesRoutes = require("./routes/hobbies.routes.js");
const PORT = 3000;

server.use(express.json());

server.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hola el server esta ON",
  });
});

server.use("/users", usersRoutes);
server.use("/hobbies", hobbiesRoutes);

server.listen(PORT, async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: false });
  console.log("El server esta ON");
});
