// T1. Uso avanzado de funciones
// U4. Asincronía y await
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

async function countDown(amount, stepCallback) {
  // A. Validación del callback
  if (typeof stepCallback !== 'function') {
    throw new Error("ERROR. Es obligatorio el paso de un callback como segundo parámetro.");
  }

  // B. Retorno de la promesa
  return new Promise((resolve, reject) => {
    // Validación de la cantidad de pasos
    if (amount <= 0) {
      return reject(new Error("ERROR. La cantidad ha de ser positiva y mayor que 0."));
    }

    let currentCount = amount;

    const intervalId = setInterval(() => {
      // Ejecutamos el callback con el valor actual
      stepCallback(currentCount);

      // Si llegamos a 0, limpiamos el intervalo y resolvemos la promesa
      if (currentCount === 0) {
        clearInterval(intervalId);
        resolve(true);
      }

      currentCount--;
    }, 100); // 100 milisegundos entre pasos
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
