export async function ejecutarEjercicio8() {
  try {
    // Datos de prueba solicitados
    const stock =[12, 0, 4, 25, 0, 7, 3];
    
    let conteoAgotados = 0;
    let conteoBajos = 0;
    let conteoDisponibles = 0;

    console.log("\n================ ESTADO DEL INVENTARIO ================");
    
    // • REGLA: Recorre el array y muestra el estado de cada posición
    for (let i = 0; i < stock.length; i++) {
      const cantidad = stock[i];

      // • REGLA: Si la cantidad es 0 -> agotado
      if (cantidad === 0) {
        console.log(`Producto en posición [${i}]: agotado `);
        conteoAgotados++;
      } 
      // • REGLA: Si es menor a 5 -> stock bajo
      else if (cantidad < 5) {
        console.log(`Producto en posición [${i}]: stock bajo (Cantidad: ${cantidad})`);
        conteoBajos++;
      } 
      // • REGLA: En otro caso -> disponible
      else {
        console.log(`Producto en posición [${i}]: disponible (Cantidad: ${cantidad})`);
        conteoDisponibles++;
      }
    }

    // • REGLA: Al final, muestra cuántos productos hay en cada estado
    console.log("-------------------------------------------------------");
    console.log(`Resumen de productos agotados: ${conteoAgotados}`);
    console.log(`Resumen de productos con stock bajo: ${conteoBajos}`);
    console.log(`Resumen de productos disponibles: ${conteoDisponibles}`);
    console.log("=======================================================\n");

  } catch (error) {
    console.error("Error al procesar el ejercicio 8:", error);
  }
}
