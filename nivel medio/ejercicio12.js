export async function ejecutarEjercicio12() {
  try {
    // Datos de prueba solicitados
    const precios = [45000, 120000, 18000, 65000];
    
    let subtotal = 0;
    let productoMasCaroCienMil = false;

    // • REGLA: Calcula el subtotal sumando todos los precios
    for (let i = 0; i < precios.length; i++) {
      subtotal += precios[i];
      // Verificamos si algún producto cuesta más de \$100.000 para el envío gratis
      if (precios[i] > 100000) {
        productoMasCaroCienMil = true;
      }
    }

    // • REGLA: Si el subtotal supera \$200.000, aplica un 10% de descuento
    let descuento = 0;
    if (subtotal > 200000) {
      descuento = subtotal * 0.10;
    }

    // • REGLA: Si algún producto cuesta más de \$100.000, el envío es gratis; si no, cuesta \$12.000
    let envio = 12000;
    if (productoMasCaroCienMil) {
      envio = 0;
    }

    // Cálculo del gran total final
    const totalPagar = subtotal - descuento + envio;

    // • REGLA: Muestra el subtotal, el descuento, el envío y el total a pagar
    console.log("\n================ DETALLE DEL CARRITO DE COMPRAS ================");
    console.log(`Subtotal de productos : $${subtotal}`);
    console.log(`Descuento aplicado (10%): -$${descuento}`);
    console.log(`Costo de envío        : $${envio}`);
    console.log("----------------------------------------------------------------");
    console.log(`TOTAL NETO A PAGAR    : $${totalPagar}`);
    console.log("================================================================\n");

  } catch (error) {
    console.error("Error al procesar el ejercicio 12:", error);
  }
}
