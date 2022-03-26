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
        name: `${"1".cyan}. Crear tarea`,
      },
      {
        value: 2,
        name: `${"2".cyan}. Listar tareas`,
      },
      {
        value: 3,
        name: `${"3".cyan}. Listear tareas completadas`,
      },
      {
        value: 4,
        name: `${"4".cyan}. Listear tareas pendientes`,
      },
      {
        value: 5,
        name: `${"5".cyan}. Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${"6".cyan}. Borrar tarea`,
      },
      {
        value: 0,
        name: `${"0".cyan}. Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("============================".green);
  console.log("   Seleccione una opción   ".white);
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

const leerInput = async (message) => {
  const { desc } = await inquirer.prompt([
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Favor de ingresar un valor";
        }
        return true;
      },
    },
  ]);
  return desc;
};

const opcionesBorrar = async (tareas = []) => {
  const choices = tareas.map((item, i) => {
    const idx = `${i + 1}`.green;
    return { value: item.id, name: `${idx}. ${item.desc}` };
  });

  choices.unshift({
    value: 0,
    name: "0.".green + " Cancelar",
  });

  const { id } = await inquirer.prompt([
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ]);
  return id;
};

const listadoChecklist = async (tareas = []) => {
  const choices = tareas.map((item, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: item.id,
      name: `${idx}. ${item.desc}`,
      checked: item.completado ? true : false,
    };
  });

  const { ids } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccionar",
      choices,
    },
  ]);
  return ids;
};

const confirmar = async (message) => {
  const { ok } = await inquirer.prompt([
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ]);
  return ok;
};

module.exports = {
  pausa,
  confirmar,
  leerInput,
  inquirerMenu,
  opcionesBorrar,
  listadoChecklist,
};
