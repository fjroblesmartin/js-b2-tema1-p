// T1. Uso avanzado de funciones
// U6. Modules
// Enunciado disponible en u6e1.md / Enunciat disponible a u6e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

// u6e1.js
import { GREET_TYPES, sayHi, sayBye } from './modules/greeting.js';

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
