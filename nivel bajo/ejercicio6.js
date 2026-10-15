import inquirer from 'inquirer';

export async function ejecutarEjercicio6() {
  try {
    // 1. Pedimos la contraseña usando await para congelar el flujo aquí
    const answers = await inquirer.prompt([
      {
        type: 'password', // Oculta los caracteres en la terminal por seguridad
        name: 'contrasena',
        message: 'Ingresa tu nueva contraseña para verificar:',
        mask: '*' // Reemplaza el texto por asteriscos en pantalla
      }
    ]);

    const password = answers.contrasena;
    
    let conteoNumeros = 0;
    let conteoMayusculas = 0;

    // • REGLA: Recorre la cadena carácter por carácter con un ciclo
    for (let caracter of password) {
      if (caracter >= '0' && caracter <= '9') {
        conteoNumeros++;
      }
      else if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
        conteoMayusculas++;
      }
    }

    let errores = [];

    // • REGLA: Mínimo 8 caracteres
    if (password.length < 8) {
      errores.push("- Debe tener mínimo 8 caracteres (actualmente tiene " + password.length + ").");
    }

    // • REGLA: Al menos un número
    if (conteoNumeros === 0) {
      errores.push("- Debe contener al menos un número.");
    }

    // • REGLA: Al menos una mayúscula
    if (conteoMayusculas === 0) {
      errores.push("- Debe contener al menos una letra mayúscula.");
    }

    // • REGLA: Muestra "Contraseña segura" o indica cuál de las reglas no cumple
    console.log("\n================ RESULTADO ================");
    if (errores.length === 0) {
      console.log("✅ Contraseña segura");
    } else {
      console.log("❌ Contraseña insegura. Detalles:");
      errores.forEach(error => console.log(error));
    }
    console.log("===========================================");

  } catch (error) {
    console.error("Error al procesar el ejercicio 6:", error);
  }
}
