const { Model, where } = require("sequelize");
const  Hobby  = require("../models/Hobby.model.js");
const User = require("../models/User.model.js");

const getHobbyBygen = async (req, res) => {

  try {

    const { gen } = req.params;
    const hobby = await Hobby.findAll(
    {
      include:{
          model : User,
          where: {
      genero:gen
      }
      }
    })
    if (!hobby) {
      return res.status(404).json({ message: "Hobby no encontrado" });
    }
    res.status(200).json(hobby);

  } 

  catch (error) 
  {
    res.status(500).json(error);
  }
};

const getHobbies = async (req, res) => {
  try {
    const hobbies = await Hobby.findAll();
    res.status(200).json(hobbies);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getHobbyById = async (req, res) => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findByPk(id);
    if (!hobby) {
      return res.status(404).json({ message: "Hobby no encontrado" });
    }
    res.status(200).json(hobby);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createHobby = async (req, res) => {
  try {
    const { name, descripcion } = req.body;
    const newHobby = await Hobby.create({ name, descripcion });
    res.status(201).json(newHobby);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateHobby = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const hobby = await Hobby.findByPk(id);
    if (!hobby) {
      return res.status(404).json({ message: "Hobby no encontrado" });
    }
    hobby.name = name;
    await hobby.save();
    res.status(200).json(hobby);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteHobby = async (req, res) => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findByPk(id);
    if (!hobby) {
      return res.status(404).json({ message: "Hobby no encontrado" });
    }
    await hobby.destroy();
    res.status(200).json({ message: "Hobby eliminado" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getHobbies,
  getHobbiesByGenero,
  getHobbyById,
  createHobby,
  updateHobby,
  deleteHobby,
};
