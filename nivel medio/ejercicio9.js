import inquirer from 'inquirer';

export async function ejecutarEjercicio9() {
  try {
    // Datos de prueba solicitados
    const coders = ["Ana", "Luis", "Sofía", "Mateo", "Valentina"];

    // • REGLA: Pide al usuario un nombre deteniendo el flujo del menú principal
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'nombreBuscar',
        message: 'Ingresa el nombre del coder a buscar:',
        validate: (value) => {
          if (value.trim() === '') {
            return 'Por favor, ingresa un nombre válido.';
          }
          return true;
        }
      }
    ]);

    // Convertimos la entrada a minúsculas y quitamos espacios residuales
    const nombreUsuario = answers.nombreBuscar.toLowerCase().trim();
    let encontrado = false;
    let posicion = -1;

    // • REGLA: Recorre el array hasta encontrarlo y detén el ciclo en cuanto aparezca
    // • REGLA: La búsqueda no debe distinguir entre mayúsculas y minúsculas
    for (let i = 0; i < coders.length; i++) {
      if (coders[i].toLowerCase() === nombreUsuario) {
        encontrado = true;
        posicion = i;
        break; // Detiene el ciclo inmediatamente en cuanto aparece
      }
    }

    console.log("\n================ RESULTADO DE BÚSQUEDA ================");
    // • REGLA: Si lo encuentra, muestra en qué posición está; si no, muestra el mensaje de error
    if (encontrado) {
      console.log(`El coder está registrado en la posición: ${posicion}`);
    } else {
      console.log("El coder no está registrado");
    }
    console.log("=======================================================\n");

  } catch (error) {
    console.error("Error al procesar el ejercicio 9:", error);
  }
}
