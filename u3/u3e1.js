// T1. Uso avanzado de funciones
// U3. Promesas
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

/**
 * Obtiene una broma desde una API externa.
 * @param {function} callback - Función a ejecutar en caso de error.
 * @returns {Promise<object>} Promesa que resuelve con el objeto JSON de la broma.
 */
function getAJoke(callback) {
    // Retornamos la promesa generada por fetch
    return fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(response => {
            // Verificamos si la respuesta de red fue exitosa (status 200-299)
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.statusText}`);
            }
            // Procesamos y devolvemos el JSON. Esto resuelve la promesa externa.
            return response.json();
        })
        .catch(error => {
            // Si hay un error (red o json), ejecutamos el callback
            if (typeof callback === 'function') {
                callback(error);
            }
            // Re-lanzamos el error para que la cadena de promesas sepa que falló
            // (Opcional, pero recomendada para mantener consistencia en promesas)
            throw error;
        });
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { getAJoke };
