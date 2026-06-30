const { sequelize } = require("../config/db.js");
const { DataTypes } = require("sequelize");

const Hobby = sequelize.define(
  "Hobby",
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    descripcion:{
      type: DataTypes.STRING,
      allowNull:false,
    },
  },
  {
    tableName: "hobbies",
    timestamps: false,
  },
);

module.exports = Hobby;
