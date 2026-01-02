import basicEncrypt from "./encrypt.js"; // (B) Importcion default

// (C) Exportacion de la constante y las funciones
export const GREET_TYPES = {
    HI: 'hi',
    BYE: 'bye'
}

export function sayHi(name) {
    return encryptedGreeting(name, GREET_TYPES.HI);
}

export function sayBye(name) {
    return encryptedGreeting(name, GREET_TYPES.BYE);
}

function encryptedGreeting(name, type) {

    if (type === GREET_TYPES.HI) {
        return basicEncrypt('Hi ' + name + '!');
    }

    return basicEncrypt('Bye ' + name + '!');
}
