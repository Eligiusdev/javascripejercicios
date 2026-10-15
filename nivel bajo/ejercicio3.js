import inquirer from 'inquirer';

export async function ejecutarEjercicio3() {
  try {
    // 1. Pedimos el número usando await para pausar el flujo aquí
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'numeroN',
        message: 'Ingresa el número inicial para la cuenta regresiva (N):',
        filter: Number
      }
    ]);

    const n = answers.numeroN;

    // • REGLA: Si N es menor o igual a 0, muestra "Número no válido".
    if (isNaN(n) || n <= 0) {
      console.log("Número no válido");
    } else {
      // • REGLA: Si es válido, muestra los números desde N hasta 1, uno por línea.
      for (let i = n; i >= 1; i--) {
        console.log(i);
      }
      
      // • REGLA: Al terminar, muestra "¡Despegue!".
      console.log("¡Despegue! ");
    }

  } catch (error) {
    console.error("Error al procesar el ejercicio 3:", error);
  }
}
