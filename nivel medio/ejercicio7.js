export async function ejecutarEjercicio7() {
  try {
    // Datos de prueba solicitados
    const notas = [4.5, 3.2, 2.8, 4.0, 3.9, 2.5, 4.8];
    
    let suma = 0;
    let notaAlta = notas[0];
    let notaBaja = notas[0];
    let aprobatorias = 0;

    // • REGLA: Recorre el array para analizar los datos
    for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      suma += nota;

      // • REGLA: Encuentra la nota más alta y la más baja
      if (nota > notaAlta) {
        notaAlta = nota;
      }
      if (nota < notaBaja) {
        notaBaja = nota;
      }
      
      // • REGLA: Cuenta cuántas notas son aprobatorias (3.0 o más)
      if (nota >= 3.0) {
        aprobatorias++;
      }
    }

    // • REGLA: Calcula el promedio de todas las notas
    const promedio = suma / notas.length;

    console.log("\n================ REPORTE DE NOTAS ================");
    console.log("Promedio del modulo: " + promedio.toFixed(2));
    console.log("Nota mas alta: " + notaAlta);
    console.log("Nota mas baja: " + notaBaja);
    console.log("Cantidad de notas aprobadas: " + aprobatorias);
    console.log("-------------------------------------------------");

    // • REGLA: Si el promedio es 3.5 o más, muestra "Módulo aprobado"; si no, "Debe reforzar"
    if (promedio >= 3.5) {
      console.log("Resultado final: Modulo aprobado ");
    } else {
      console.log("Resultado final: Debe reforzar ");
    }
    console.log("==================================================\n");

  } catch (error) {
    console.error("Error al procesar el ejercicio 7:", error);
  }
}
