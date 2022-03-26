const Tareas = require("./models/tareas");
const {
  inquirerMenu,
  pausa,
  leerInput,
  opcionesBorrar,
  confirmar,
  listadoChecklist,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const main = async () => {
  let opt;
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareas(tareasDB);
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const desc = await leerInput("Descripcion");
        tareas.crearTarea(desc);
        break;
      case 2:
        tareas.listadoCompleto();
        break;
      case 3:
        tareas.listarPorEstado();
        break;
      case 4:
        tareas.listarPorEstado(false);
        break;
      case 5:
        const ids = await listadoChecklist(tareas.listadoArr);
        tareas.toggleCompletada(ids);
        break;
      case 6:
        const id = await opcionesBorrar(tareas.listadoArr);
        if (id != 0) {
          const ok = await confirmar("¿Seguro que deseas eliminar la tarea?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea eliminada");
          }
        }
        break;
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== 0);
};

main();
