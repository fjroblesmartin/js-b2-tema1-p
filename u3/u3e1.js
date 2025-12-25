// T1. Uso avanzado de funciones
// U3. Promesas
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

function getAJoke(callback) {
  // Retornamos la promesa generada por fetch
  return fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then((response) => {
      // Procesamos la respuesta para obtener el JSON
      return response.json();
    })
    .catch((error) => {
      // Si ocurre un error (de red o de procesamiento), 
      // ejecutamos el callback con el error
      if (typeof callback === 'function') {
        callback(error);
      }
      // Re-lanzamos el error para que la promesa 
      // devuelta mantenga el estado de rechazada
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
