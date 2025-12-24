// T1. Uso avanzado de funciones
// U1. Funciones de retorno de llamada: Callbacks
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

function conditionalCallback(callback, param) {
  // Verificamos si param existe y es un valor no falso, no nulo, no vacio, ...
  if (param) {
    // Si es verdadero, ejecutamos la función callback pasandole param como parámetro
    return callback(param);
  } else {
    // Si no está definido o es equivalente a false, devuelve false
    return false;
  }
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { conditionalCallback };
