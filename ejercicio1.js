import inquirer from 'inquirer';

// Envolvemos el código en una función exportable
export function ejecutarEjercicio1() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'temperatura',
        message: 'Ingresa la temperatura en grados Celsius:',
        filter: Number
      }
    ])
    .then((answers) => {
      const temperatura = answers.temperatura;
      if (temperatura < 10) console.log("Hace frío, lleva chaqueta ");
      else if (temperatura < 24) console.log("Clima templado ");
      else console.log("Hace calor, hidrátate ");
    });
}
