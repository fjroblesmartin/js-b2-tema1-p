// T1. Uso avanzado de funciones
// U6. Modules
// Enunciado disponible en u6e1.md / Enunciat disponible a u6e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:


// Función interna (no se exporta) que usa el cifrado
const encryptedGreeting = (text) => {
    return basicEncrypt(text);
};

export function sayHi(name) {
    return encryptedGreeting(`Hola, ${name}`);
}

export function sayBye(name) {
    return encryptedGreeting(`Adiós, ${name}`);
}

// u6e1.js
import { GREET_TYPES, sayHi, sayBye } from './modules/greeting.js';

/**
 * Función que gestiona los saludos según el tipo
 * @param {string} name 
 * @param {string} type 
 */
function doGreet(name, type) {
    if (type === GREET_TYPES.HI) {
        return sayHi(name);
    } else {
        return sayBye(name);
    }
}


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { doGreet };
