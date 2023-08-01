const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("genre", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  });
};
