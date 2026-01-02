// T1. Uso avanzado de funciones
// U4. Asincronía y await
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

async function countDown(amount, stepCallback) {
  // A. Validación: El callback debe ser una función
  if (typeof stepCallback !== 'function') {
    throw new Error("ERROR. Es obligatorio el paso de un callback como segundo parámetro.");
  }

  // B. Respuesta: Retornamos la Promesa
  return new Promise((resolve, reject) => {
    // Validación: La cantidad debe ser mayor que 0
    if (amount <= 0) {
      return reject(new Error("ERROR. La cantidad ha de ser positiva y mayor que 0."));
    }

    let currentCount = amount;

    const intervalId = setInterval(() => {
      // 1. Ejecutamos el callback con el valor actual
      stepCallback(currentCount);

      // 2. Comprobamos si hemos terminado el paso 0
      if (currentCount === 0) {
        clearInterval(intervalId);
        resolve(true);
      } else {
        // 3. Decrementamos para el siguiente ciclo
        currentCount--;
      }
    }, 100);
  });
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { countDown };
