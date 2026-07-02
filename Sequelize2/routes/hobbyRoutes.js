const express = require("express")
const { crearHobbies, buscarPorGenero, buscarPorSimilitud, buscarTodos, recomendarPorEdad , buscarHobbiesPorPais, buscarHobbiesNivel } = require("../controllers/hobbiesController.js")

const router = express.Router()

router.post("/", crearHobbies)
router.get("/usuarios", buscarPorGenero)
router.get("/similitud", buscarPorSimilitud)
router.get("/", buscarTodos)
router.get("/recomendar/:id", recomendarPorEdad)
router.get("/pais/:pais", buscarHobbiesPorPais)
router.get("/nivel/:nivel", buscarHobbiesNivel)



module.exports = router