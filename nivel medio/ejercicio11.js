export async function ejecutarEjercicio11() {
  try {
    // Datos de prueba solicitados
    const digitos =[1, 2, 3, 2, 1];
    let esPalindromo = true;

    // • REGLA: Compara el primer dígito con el último, el segundo con el penúltimo, y así sucesivamente
    // Recorremos solo hasta la mitad del array para no repetir comparaciones
    for (let i = 0; i < Math.floor(digitos.length / 2); i++) {
      const izquierdo = digitos[i];
      const derecho = digitos[digitos.length - 1 - i];

      // • REGLA: En cuanto encuentres una pareja diferente, detén el ciclo
      if (izquierdo !== derecho) {
        esPalindromo = false;
        break; 
      }
    }

    console.log("\n================ VERIFICADOR DE PALÍNDROMOS ================");
    console.log(`Arreglo de dígitos analizado: [${digitos.join(", ")}]`);
    console.log("-----------------------------------------------------------");

    // • REGLA: Muestra "Es palíndromo" o "No es palíndromo"
    if (esPalindromo) {
      console.log("Resultado: Es palíndromo");
    } else {
      console.log("Resultado: No es palíndromo");
    }
    console.log("============================================================\n");

  } catch (error) {
    console.error("Error al procesar el ejercicio 11:", error);
  }
}
