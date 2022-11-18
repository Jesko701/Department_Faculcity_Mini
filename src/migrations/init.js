const Mahasiswa = require("../models/Mahasiswa");
const Matakuliah = require("../models/Matakuliahs");
const Prodi = require("../models/Prodis");
const Matakuliah_Mahasiswa = require("../models/matakuliah_mahasiwa");
const sq = require("../../config/db_config");


Prodi.hasMany(Mahasiswa, {foreignKey: "idProdis"})
Mahasiswa.belongsTo(Prodi,{foreignKey:"idProdis"})

Matakuliah_Mahasiswa.belongsTo(Mahasiswa, {foreignKey: "mhsNim"})
Matakuliah_Mahasiswa.belongsTo(Matakuliah, {foreignKey: "mkId"})
Mahasiswa.hasMany(Matakuliah_Mahasiswa, {foreignKey: "mhsNim"})
Matakuliah.hasMany(Matakuliah_Mahasiswa, {foreignKey: "mkId"})


const initMigration = async () => {
  await sq.authenticate().then(
    await Matakuliah_Mahasiswa.sync({alter:true}),
    await Prodi.sync({alter:true}),
    await Matakuliah.sync({alter:true}),
    await Mahasiswa.sync({alter:true}),
  ).catch(err => console.log(`Something went wrong`))
};

initMigration();
