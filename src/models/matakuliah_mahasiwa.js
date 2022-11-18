const { Model } = require("sequelize");
const sq = require("../../config/db_config");

class Matakuliah_Mahasiswa extends Model {}

Matakuliah_Mahasiswa.init(
  {},
  {
    sequelize: sq,
    freezeTableName: true,
  }
);

module.exports = Matakuliah_Mahasiswa;
