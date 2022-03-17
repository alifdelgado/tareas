require("colors");

const mostrarMenu = async () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("============================".green);
    console.log("   Seleccione una opción   ".green);
    console.log("============================\n".green);
    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listear tareas`);
    console.log(`${"3.".green} Listear tareas completadas`);
    console.log(`${"4.".green} Listear tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`\nPresione ${"ENTER".green} para salir\n`, () => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  pausa,
  mostrarMenu,
};
