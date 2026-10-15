import inquirer from 'inquirer';

export function ejecutarEjercicio4() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'numeroN',
        message: 'Ingresa el numero limite (N) para el juego:',
        filter: Number
      }
    ])
    .then((answers) => {
      const n = answers.numeroN;

      if (isNaN(n) || n < 1) {
        console.log("Por favor, ingresa un numero entero positivo mayor o igual a 1.");
      } else {
        for (let i = 1; i <= n; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            console.log("RiwiCoder");
          } else if (i % 3 === 0) {
            console.log("Riwi");
          } else if (i % 5 === 0) {
            console.log("Coder");
          } else {
            console.log(i);
          }
        }
      }
    })
    .catch((error) => {
      console.error("Algo salio mal:", error);
    });
}
