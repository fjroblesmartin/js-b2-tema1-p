// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e1.md / Enunciat disponible a u5e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

const converter = (function() {
    
    // Función interna que realiza la lógica
    function generate(text) {
        // A.1 Validación: Si no es string o no existe, devuelve false
        if (typeof text !== 'string') {
            return false;
        }

        // A.2 Pasar a minúsculas
        let lowerText = text.toLowerCase();

        // A.3 Reemplazo de vocales según la tabla
        // Usamos una expresión regular para capturar todas las variantes
        const map = {
            '[aá]': '1',
            '[eé]': '2',
            '[ií]': '3',
            '[oó]': '4',
            '[uúü]': '5'
        };

        for (let pattern in map) {
            lowerText = lowerText.replace(new RegExp(pattern, 'g'), map[pattern]);
        }

        return lowerText;
    }

    // B. Retornamos la referencia a la función generate
    return generate;

})();


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { converter };
