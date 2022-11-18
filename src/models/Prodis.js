const { DataTypes, Model } = require("sequelize");
const sq = require("../../config/db_config");
const Mahasiswa = require("./Mahasiswa");
class Prodi extends Model {}

Prodi.init(
  {
    nama: {
      type: DataTypes.STRING,
      validate: {
        check: function (nama) {
          if (!"/([A-z])") throw new Error("Data must be an Character");
        },
      },
      allowNull: false,
    },
  },
  {
    sequelize: sq,
    freezeTableName: true,
  }
);

module.exports = Prodi;
