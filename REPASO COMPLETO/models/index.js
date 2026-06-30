const User = require("./User.model.js");
const Hobby = require("./Hobby.model.js");

User.belongsToMany(Hobby, { through: "userHobbies" });
Hobby.belongsToMany(User, { through: "userHobbies" });

module.exports = {
    User,
    Hobby
}
