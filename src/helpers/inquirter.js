require("colors");
const inquirer = require("inquirer");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: "1. Crear tarea",
      },
      {
        value: 2,
        name: "2. Listar tareas",
      },
      {
        value: 3,
        name: "3. Listear tareas completadas",
      },
      {
        value: 4,
        name: "4. Listear tareas pendientes",
      },
      {
        value: 5,
        name: "5. Completar tarea(s)",
      },
      {
        value: 6,
        name: "6. Borrar tarea",
      },
      {
        value: 0,
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("============================".green);
  console.log("   Seleccione una opción   ".green);
  console.log("============================\n".green);
  return await inquirer.prompt(preguntas);
};

const pausa = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"ENTER".green} para continuar`,
    },
  ]);
};

module.exports = {
  pausa,
  inquirerMenu,
};
