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
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
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

const leerInput = async () => {
  await inquirer.prompt([
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (this.value.length === 0) {
          return "Favor de ingresar un valor";
        }
        return true;
      },
    },
  ]);
};

module.exports = {
  pausa,
  inquirerMenu,
};
