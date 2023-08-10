const { DataTypes } = require("sequelize");
const Crud = require("../controllers/crud");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// class Videogame extends Crud {
//   constructor(sequelize) {
//     super(
//       sequelize.define("videogame", {
//         id: {
//           type: DataTypes.UUID, // Tipo de dato hexadecimal
//           primaryKey: true,
//           allowNull: false,
//           defaultValue: DataTypes.UUIDV4,
//         },
//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           // defaultValue: null,
//         },
//         description: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           // defaultValue: null,
//         },
//         platforms: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           // defaultValue: null,
//         },
//         image: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           // defaultValue: null,
//         },
//         release_date: {
//           type: DataTypes.DATE,
//           allowNull: false,
//           // defaultValue: null,
//         },
//         rating: {
//           type: DataTypes.DECIMAL,
//           validate: {
//             max: 10,
//             min: 0,
//           },
//           allowNull: false,
//           // defaultValue: null,
//         },
//       })
//     );
//   }
// }

module.exports = (sequelize) => {
  sequelize.define("videogames", {
    id: {
      type: DataTypes.UUID, // Tipo de dato hexadecimal
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: null,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: null,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: null,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: null,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: null,
    },
    rating: {
      type: DataTypes.DECIMAL,
      validate: {
        max: 10,
        min: 0,
      },
      allowNull: false,
      // defaultValue: null,
    },
  });
};
