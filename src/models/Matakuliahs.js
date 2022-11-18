const { DataTypes, Model,  } = require("sequelize");
const sq = require("../../config/db_config");

class Matakuliah extends Model {}
Matakuliah.init(
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: sq,
    freezeTableName: true,
  }
);

module.exports = Matakuliah;
