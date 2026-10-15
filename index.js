import inquirer from 'inquirer';

const menuPrincipal = [
  {
    type: 'select',
    name: 'nivelSeleccionado',
    message: 'Seleccione el nivel de los ejercicios que desea revisar:',
    choices: [
      { name: '1. Nivel Bajo (Ejercicios 1 al 6)', value: 'BAJO' },
      { name: '2. Nivel Medio (Ejercicios 7 al 12)', value: 'MEDIO' },
      { name: 'Salir del programa', value: 'SALIR' }
    ]
  }
];

const menuBajo = [
  {
    type: 'select',
    name: 'ejercicioSeleccionado',
    message: 'NIVEL BAJO - Seleccione un ejercicio para ejecutar:',
    choices: [
      { name: 'Ejercicio 1: Control de temperatura', value: '1' },
      { name: 'Ejercicio 2: Tarifas de parqueadero (Riwi)', value: '2' },
      { name: 'Ejercicio 3: Cuenta regresiva de lanzamiento', value: '3' },
      { name: 'Ejercicio 4: Juego de FizzBuzz (RiwiCoder)', value: '4' },
      { name: 'Ejercicio 5: Adivina el número secreto (1-20)', value: '5' },
      { name: 'Ejercicio 6: Validador de contraseñas seguras', value: '6' },
      { name: '<< Volver al Menú Principal', value: 'VOLVER' }
    ]
  }
];

function iniciarApp() {
  inquirer.prompt(menuPrincipal)
    .then((answers) => {
      switch (answers.nivelSeleccionado) {
        case 'BAJO':
          manejarSubmenu(menuBajo, 'nivel bajo');
          break;
        case 'SALIR':
          process.exit(0);
      }
    })
    .catch((error) => console.error('Error en el menú principal:', error));
}

async function manejarSubmenu(estructuraMenu, nombreCarpeta) {
  try {
    const answers = await inquirer.prompt(estructuraMenu);
    const numeroEjercicio = answers.ejercicioSeleccionado;

    if (numeroEjercicio === 'VOLVER') {
      console.clear();
      iniciarApp();
      return;
    }

    console.clear();
    const rutaArchivo = `./${nombreCarpeta}/ejercicio${numeroEjercicio}.js`;
    
    try {
      const modulo = await import(rutaArchivo);
      const nombreFuncion = `ejecutarEjercicio${numeroEjercicio}`;
      
      if (modulo[nombreFuncion]) {
        // LINEA CLAVE: El await obliga a esperar que el ejercicio termine al 100%
        await modulo[nombreFuncion]();
      }
    } catch (err) {
      console.log(`❌ Error al cargar el archivo o ejecucion.`);
    }

    // Al terminar por completo el ejercicio, entra esta pregunta de forma limpia
    console.log('\n----------------------------------------');
    const respuestaSalida = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'regresar',
        message: '¿Deseas regresar al menú de selección?',
        default: true
      }
    ]);

    console.clear();
    if (respuestaSalida.regresar) {
      iniciarApp();
    } else {
      process.exit(0);
    }

  } catch (error) {
    console.error('Error en el submenú:', error);
  }
}

console.clear();
iniciarApp();