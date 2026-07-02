const { Router } = require("express");
const { getUsers, getUserById, createUser, updateUser, deleteUser, getOldUser, crearRelacion } = require("../controllers/users.controller");

const routes = Router()

routes.get('/', getUsers)
routes.get('/old', getOldUser)
routes.get('/:id', getUserById)
routes.post('/', createUser)
routes.put('/:id', updateUser)
routes.delete('/:id', deleteUser)
routes.post("/", crearRelacion)

module.exports = routes