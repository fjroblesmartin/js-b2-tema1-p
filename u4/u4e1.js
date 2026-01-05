// T1. Uso avanzado de funciones
// U4. Asincronía y await
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function countDown(amount, stepCallback) {
    // --- A. VALIDACIÓN SÍNCRONA ---
    // Verificamos si el callback es una función válida antes de crear la promesa.
    if (typeof stepCallback !== 'function') {
        throw new Error("ERROR. Es obligatorio el paso de un callback como segundo parámetro.");
    }

    // --- B. RESPUESTA (PROMESA) ---
    return new Promise((resolve, reject) => {
        // 1. Criterio de Rechazo: Cantidad menor o igual a 0
        if (typeof amount !== 'number' || amount <= 0) {
            return reject(new Error("ERROR. La cantidad ha de ser positiva y mayor que 0."));
        }

        let currentStep = amount;

        // 2. Intervalo de ejecución (100ms)
        const timerId = setInterval(() => {
            // Llamamos al callback con el valor actual
            stepCallback(currentStep);

            // Decrementamos el contador
            currentStep--;

            // Verificamos si la cuenta atrás ha terminado (llegó a 0)
            if (currentStep < 0) {
                clearInterval(timerId); // Limpiamos el intervalo
                resolve(true);          // 3. Resolución con valor true
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
