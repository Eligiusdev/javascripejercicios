import inquirer from 'inquirer';

export async function ejecutarEjercicio2() {
  try {
    // 1. Solicitamos los datos usando await para congelar la ejecución aquí
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'horas',
        message: 'Ingresa las horas de estadía:',
        validate: (value) => {
          const horas = parseInt(value);
          if (isNaN(horas) || horas <= 0) {
            return 'Por favor, ingresa un número de horas mayor a 0.';
          }
          return true;
        },
        filter: Number
      },
      {
        type: 'confirm',
        name: 'esRiwi',
        message: '¿Eres coder de Riwi?',
        default: false
      }
    ]);

    const horas = answers.horas;
    const esRiwi = answers.esRiwi; // Devuelve directamente true o false gracias al tipo 'confirm'
    let tarifa = 0;

    // • REGLA 1: La primera hora cuesta \$3.000 y cada hora adicional \$2.000
    if (horas === 1) {
      tarifa = 3000;
    } else {
      tarifa = 3000 + (horas - 1) * 2000;
    }

    // • REGLA 2: Si el total supera \$20.000, se cobra la tarifa plena
    if (tarifa > 20000) {
      tarifa = 20000;
    }

    // • REGLA 3: Si es coder, aplica un descuento del 15%
    if (esRiwi) {
      let descuento = tarifa * 0.15;
      tarifa = tarifa - descuento;
      console.log(`\n¡Descuento Coder aplicado! (15% menos) `);
    }

    // • REGLA 4: Muestra el total a pagar en la consola
    console.log(`Total a pagar: $${tarifa}`);

  } catch (error) {
    console.error("Error al procesar el ejercicio 2:", error);
  }
}
