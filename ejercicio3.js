import inquirer from 'inquirer';

export function ejecutarEjercicio3() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'numeroN',
        message: 'Ingresa el numero inicial para la cuenta regresiva (N):',
        filter: Number
      }
    ])
    .then((answers) => {
      const n = answers.numeroN;

      if (isNaN(n) || n <= 0) {
        console.log("Numero no valido");
      } else {
        for (let i = n; i >= 1; i--) {
          console.log(i);
        }
        console.log("¡Despegue!");
      }
    })
    .catch((error) => {
      console.error("Algo salio mal:", error);
    });
}
