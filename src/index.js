const Tareas = require("./models/tareas");
const { inquirerMenu, pausa } = require("./helpers/inquirter");

const main = async () => {
  let opt;
  do {
    const { opcion } = await inquirerMenu();
    console.log({ opcion });
    // const tareas = new Tareas();
    // tareas._listadoTareas[tarea.id] = tarea;
    await pausa();
  } while (opt !== 0);
};

main();
