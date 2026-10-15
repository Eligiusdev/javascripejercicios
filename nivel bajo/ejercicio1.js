import inquirer from 'inquirer';

// Obligatorio usar async para que el index sepa esperarlo
export async function ejecutarEjercicio1() {
  try {
    // Usamos await en lugar de .then() para detener la linea aqui
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'temperatura',
        message: 'Ingresa la temperatura en grados Celsius:',
        filter: Number
      }
    ]);

    const temperatura = answers.temperatura;

    if (temperatura < 10) {
      console.log("Hace frío, lleva chaqueta");
    } else if (temperatura < 24) { 
      console.log("Clima templado");
    } else {
      console.log("Hace calor, hidrátate");
    }
    
  } catch (error) {
    console.error("Error al procesar el ejercicio:", error);
  }
}
