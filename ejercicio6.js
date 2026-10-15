import inquirer from 'inquirer';

export function ejecutarEjercicio6() {
  inquirer
    .prompt([
      {
        type: 'password',
        name: 'contrasena',
        message: 'Ingresa tu nueva contrasena para verificar:',
        mask: '*'
      }
    ])
    .then((answers) => {
      const password = answers.contrasena;
      
      let conteoNumeros = 0;
      let conteoMayusculas = 0;

      for (let caracter of password) {
        if (caracter >= '0' && caracter <= '9') {
          conteoNumeros++;
        } else if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
          conteoMayusculas++;
        }
      }

      let errores = [];

      if (password.length < 8) {
        errores.push("- Debe tener minimo 8 caracteres (actualmente tiene " + password.length + ").");
      }

      if (conteoNumeros === 0) {
        errores.push("- Debe contener al menos un numero.");
      }

      if (conteoMayusculas === 0) {
        errores.push("- Debe contener al menos una letra mayuscula.");
      }

      console.log("\n================ RESULTADO ================");
      if (errores.length === 0) {
        console.log("Contrasena segura");
      } else {
        console.log("Contrasena insegura. Detalles:");
        errores.forEach(error => console.log(error));
      }
      console.log("===========================================\n");
    })
    .catch((error) => {
      console.error("Algo salio mal:", error);
    });
}
