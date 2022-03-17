const uuid = require("uuid");

class Tarea {
  constructor(desc, completado) {
    this.id = uuid.v4();
    this.desc = desc;
    this.completado = completado;
  }
}

module.exports = Tarea;
