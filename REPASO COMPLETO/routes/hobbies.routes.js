const { Router } = require("express");
const {
  getHobbies,
  getHobbyById,
  createHobby,
  updateHobby,
  deleteHobby,
  getHobbiesByGenero,
} = require("../controllers/hobbies.controller");

const routes = Router();

routes.get("/genero/:genero",  getHobbiesByGenero);
routes.get("/", getHobbies);
routes.get("/:id", getHobbyById);
routes.post("/", createHobby);
routes.put("/:id", updateHobby);
routes.delete("/:id", deleteHobby);

module.exports = routes;
