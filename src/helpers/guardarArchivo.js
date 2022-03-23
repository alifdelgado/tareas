const fs = require("fs");

const guardarDB = (data) => {
  const archivo = "./src/db/data.json";
  fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = { guardarDB };
