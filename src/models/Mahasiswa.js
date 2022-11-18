const { Model, DataTypes, Sequelize } = require("sequelize");
const sq = require("../../config/db_config");

class Mahasiswa extends Model {}

Mahasiswa.init(
  {
    nim: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        is: /^[0-9]+$/i,
        min: 6,
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-z ]+$/i,
        min: 2,
      },
    },
    angkatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^([0-9])+$/i,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sq,
    freezeTableName: true,
  }
);

module.exports = Mahasiswa;
