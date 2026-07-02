const { User, Hobby } = require("../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Hobby
    });
    if (users.length === 0) {
      return res.status(404).json({ message: "Usuarios no encontrados" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOldUser = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(404).json({ message: "Usuarios no encontrados" });
    }
    let max = 0;
    let maxUser = {};
    for (let i = 0; i < users.length; i++) {
      if (users[i].edad > max) {
        max = users[i].edad;
        maxUser = users[i];
      }
    }
    res.status(200).json(maxUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, dni, edad, genero } = req.body;
    const newUser = await User.create({ firstName, lastName, dni, edad, genero });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, dni } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.dni = dni;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await user.destroy();
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const crearRelacion = async (req, res) => {
  const id =  req.body.id
  const idH = req.body.id

  const usuario = await User.findByPk(id)
  const consulta = await usuario.addHobbies(idH)
  if(consulta){
    res.status(201).json({message: "creado"})
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getOldUser,
  crearRelacion
};
