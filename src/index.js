const Tareas = require("./models/tareas");
const { inquirerMenu, pausa } = require("./helpers/inquirter");

const main = async () => {
  let opt;
  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        break;
      case 2:
        console.log(tareas._listado);
        break;
    }
    await pausa();
  } while (opt !== 0);
};

main();
