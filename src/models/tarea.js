const uuid = require("uuid");

class Tarea {
  constructor(desc) {
    this.id = uuid.v4();
    this.desc = desc;
    this.completado = null;
  }
}

module.exports = Tarea;
