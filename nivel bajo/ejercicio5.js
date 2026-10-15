import inquirer from 'inquirer';

export async function ejecutarEjercicio5() {
  try {
    // 1. Configuraciones iniciales del juego
    const NUMERO_SECRETO = Math.floor(Math.random() * 20) + 1;
    const MAX_INTENTOS = 5;
    let gano = false;

    console.log("=========================================");
    console.log(" ¡BIENVENIDO AL JUEGO DEL NÚMERO SECRETO! ");
    console.log("   Adivina el número entre 1 y 20.");
    console.log(`   Tienes un máximo de ${MAX_INTENTOS} intentos.`);
    console.log("=========================================\n");

    // 2. Controlamos los intentos iterando de forma síncrona con await
    for (let intentoActual = 1; intentoActual <= MAX_INTENTOS; intentoActual++) {
      
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'suposicion',
          message: `[Intento ${intentoActual}/${MAX_INTENTOS}] Ingresa tu número:`,
          validate: (value) => {
            const num = parseInt(value);
            if (isNaN(num) || num < 1 || num > 20) {
              return 'Por favor, ingresa un número entero entre 1 y 20.';
            }
            return true;
          },
          filter: Number
        }
      ]);

      const numeroUsuario = answers.suposicion;

      // • REGLA: Si acierta, muestra "¡Ganaste en X intentos!" y rompemos el ciclo
      if (numeroUsuario === NUMERO_SECRETO) {
        console.log(`\n🎉 ¡Ganaste en ${intentoActual} intentos! ¡Eres un crack! 🚀\n`);
        gano = true;
        break;
      } 
      
      // • REGLA: Si no acierta, le damos una pista (excepto en el último intento)
      if (intentoActual < MAX_INTENTOS) {
        if (NUMERO_SECRETO > numeroUsuario) {
          console.log(" El número secreto es MAYOR.\n");
        } else {
          console.log(" El número secreto es MENOR.\n");
        }
      }
    }

    // • REGLA: Si no acierta en los 5 intentos, muestra "Perdiste, el número era X"
    if (!gano) {
      console.log(`❌ Perdiste, el número era ${NUMERO_SECRETO}`);
    }

  } catch (error) {
    console.error("Error al procesar el ejercicio 5:", error);
  }
}
