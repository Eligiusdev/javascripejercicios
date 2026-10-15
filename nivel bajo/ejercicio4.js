import inquirer from 'inquirer';

export async function ejecutarEjercicio4() {
  try {
    // 1. Pedimos el número límite usando await para pausar el flujo aquí
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'numeroN',
        message: 'Ingresa el número límite (N) para el juego:',
        filter: Number
      }
    ]);

    const n = answers.numeroN;

    // Validamos que el usuario ingrese un número inicial válido
    if (isNaN(n) || n < 1) {
      console.log("Por favor, ingresa un número entero positivo mayor o igual a 1.");
    } else {
      
      // • REGLA: Recorre los números desde el 1 hasta N
      for (let i = 1; i <= n; i++) {
        
        // • REGLA: Si es múltiplo de 3 y de 5 al mismo tiempo -> "RiwiCoder"
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("RiwiCoder");
        } 
        // • REGLA: Si el número es múltiplo de 3 -> "Riwi"
        else if (i % 3 === 0) {
          console.log("Riwi");
        } 
        // • REGLA: Si es múltiplo de 5 -> "Coder"
        else if (i % 5 === 0) {
          console.log("Coder");
        } 
        // • REGLA: En cualquier otro caso, muestra el número
        else {
          console.log(i);
        }
        
      }
    }

  } catch (error) {
    console.error("Error al procesar el ejercicio 4:", error);
  }
}
