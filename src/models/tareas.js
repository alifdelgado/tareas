const Tarea = require("./tarea");

class Tareas {
  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareas(tareas = []) {
    tareas.forEach((tarea) => (this._listado[tarea.id] = tarea));
  }

  listadoCompleto() {
    this.listadoArr.forEach((item, index) => {
      const idx = `${index + 1}`.green;
      console.log(
        `${idx}. ${item.desc}::${
          item.completado ? "Completada".green : "Pendiente".red
        }`
      );
    });
  }

  listarPorEstado(completadas = true) {
    this.listadoArr
      .filter((item) => {
        if (completadas) {
          return item.completado;
        } else {
          return !item.completado;
        }
      })
      .forEach((item, index) => {
        const idx = `${index + 1}`.green;
        console.log(
          `${idx}. ${item.desc}::${
            item.completado ? "Completada".green : "Pendiente".red
          }`
        );
      });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompletada(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completado) {
        tarea.completado = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completado = null;
      }
    });
  }
}

module.exports = Tareas;
