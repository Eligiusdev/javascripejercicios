export async function ejecutarEjercicio10() {
  try {
    // Datos de prueba solicitados
    const temperaturas =[24, 29, 31, 22, 27, 30, 26];
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    let suma = 0;
    let maxTemp = temperaturas[0];
    let indiceDiaCaluroso = 0;
    let diasAlertaCalor = 0;

    // • REGLA: Recorremos para calcular la suma total, el día más caluroso y los días mayores a 28°
    for (let i = 0; i < temperaturas.length; i++) {
      const temp = temperaturas[i];
      suma += temp;

      // • REGLA: Indica cuál fue el día más caluroso (día 1 = lunes)
      if (temp > maxTemp) {
        maxTemp = temp;
        indiceDiaCaluroso = i;
      }

      // Conteo para la alerta de calor (días por encima de 28°)
      if (temp > 28) {
        diasAlertaCalor++;
      }
    }

    // • REGLA: Calcula la temperatura promedio de la semana
    const promedio = suma / temperaturas.length;
    let diasPorEncimaPromedio = 0;

    // • REGLA: Muestra cuántos días estuvieron por encima del promedio
    for (let i = 0; i < temperaturas.length; i++) {
      if (temperaturas[i] > promedio) {
        diasPorEncimaPromedio++;
      }
    }

    console.log("\n================ REPORTE METEOROLÓGICO ================");
    console.log(`Temperatura promedio semanal: ${promedio.toFixed(2)}°C`);
    console.log(`Día más caluroso: Día ${indiceDiaCaluroso + 1} = ${diasSemana[indiceDiaCaluroso]} (${maxTemp}°C)`);
    console.log(`Días por encima del promedio: ${diasPorEncimaPromedio}`);
    console.log("------------------------------------------------------");

    // • REGLA: Si hubo más de 3 días por encima de 28°, muestra "Alerta de calor"
    if (diasAlertaCalor > 3) {
      console.log("ALERTA: Alerta de calor");
    } else {
      console.log("Estado climático: Dentro de los márgenes normales");
    }
    console.log("=======================================================\n");

  } catch (error) {
    console.error("Error al procesar el ejercicio 10:", error);
  }
}
