import inquirer from 'inquirer';

const NUMERO_SECRETO = Math.floor(Math.random() * 20) + 1;
const MAX_INTENTOS = 5;

function pedirIntento(intentoActual) {
  if (intentoActual > MAX_INTENTOS) {
    console.log("Perdiste, el numero era " + NUMERO_SECRETO);
    return;
  }

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'suposicion',
        message: "[Intento " + intentoActual + "/" + MAX_INTENTOS + "] Ingresa tu numero:",
        validate: (value) => {
          const num = parseInt(value);
          if (isNaN(num) || num < 1 || num > 20) {
            return 'Por favor, ingresa un numero entero entre 1 y 20.';
          }
          return true;
        },
        filter: Number
      }
    ])
    .then((answers) => {
      const numeroUsuario = answers.suposicion;

      if (numeroUsuario === NUMERO_SECRETO) {
        console.log("\n¡Ganaste en " + intentoActual + " intentos!\n");
      } else {
        if (NUMERO_SECRETO > numeroUsuario) {
          console.log("El numero secreto es MAYOR.\n");
        } else {
          console.log("El numero secreto es MENOR.\n");
        }
        pedirIntento(intentoActual + 1);
      }
    })
    .catch((error) => {
      console.error("Algo salio mal:", error);
    });
}

export function ejecutarEjercicio5() {
  console.log("Adivina el numero secreto entre 1 y 20.");
  console.log("Tienes un maximo de " + MAX_INTENTOS + " intentos.\n");
  pedirIntento(1);
}

