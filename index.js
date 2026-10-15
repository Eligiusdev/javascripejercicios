import inquirer from 'inquirer';

// 1. Importamos las funciones de cada ejercicio
import { ejecutarEjercicio1 } from './ejercicio1.js';
import { ejecutarEjercicio2 } from './ejercicio2.js';
import { ejecutarEjercicio3 } from './ejercicio3.js';
import { ejecutarEjercicio4 } from './ejercicio4.js';
import { ejecutarEjercicio5 } from './ejercicio5.js';
import { ejecutarEjercicio6 } from './ejercicio6.js';

function mostrarMenu() {
  console.log("\n=========================================");
  console.log(" MENÚ INTERACTIVO DE EJERCICIOS RIWI CODER");
  console.log("=========================================\n");

  inquirer
    .prompt([
      {
        type: 'select', // Cambiado de 'list' a 'select' para compatibilidad con tu versión
        name: 'opcion',
        message: '¿Qué ejercicio deseas ejecutar hoy?',
        choices: [
          { name: '1. Validador de Temperatura', value: 'j1' },
          { name: '2. Calcular Tarifa Parqueadero (Riwi Coder)', value: 'j2' },
          { name: '3. Cuenta Regresiva', value: 'j3' },
          { name: '4. FizzBuzz (RiwiCoder)', value: 'j4' },
          { name: '5. Juego del Número Secreto', value: 'j5' },
          { name: '6. Validador de Contraseñas Seguras', value: 'j6' },
          { name: 'Salir del menú', value: 'salir' }
        ]
      }
    ])
    .then((answers) => {
      switch (answers.opcion) {
        case 'j1':
          ejecutarEjercicio1();
          break;
        case 'j2':
          ejecutarEjercicio2();
          break;
        case 'j3':
          ejecutarEjercicio3();
          break;
        case 'j4':
          ejecutarEjercicio4();
          break;
        case 'j5':
          ejecutarEjercicio5();
          break;
        case 'j6':
          ejecutarEjercicio6();
          break;
        case 'salir':
          console.log("¡Sigue codeando! Hasta la próxima.");
          process.exit(0);
        default:
          console.log("Opción no válida.");
          break;
      }
    })
    .catch((error) => {
      console.error("Ocurrió un error en el menú:", error);
    });
}

// Arrancamos el menú principal
mostrarMenu();

