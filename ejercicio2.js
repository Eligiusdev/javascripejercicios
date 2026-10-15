import inquirer from 'inquirer';

// Envolvemos el código en una función exportable
export function ejecutarEjercicio2() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'horas',
        message: 'Ingresa las horas de estadía:',
        filter: Number
      },
      {
        type: 'confirm',
        name: 'esRiwi',
        message: '¿Eres coder de Riwi?',
        default: false
      }
    ])
    .then((answers) => {
      const horas = answers.horas;
      const esRiwi = answers.esRiwi;
      let tarifa = horas === 1 ? 3000 : 3000 + (horas - 1) * 2000;
      if (tarifa > 20000) tarifa = 20000;
      if (esRiwi) tarifa -= (tarifa * 0.15);
      console.log(`Total a pagar: $${tarifa}\n`);
    });
}

