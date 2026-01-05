// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

/**
 * Crea una estructura de array especial encapsulada (Closure).
 * @param {number} maxElements - (Opcional) Define el límite _max. Por defecto 10.
 */
function numberArray(maxElements = 10) {
    // --- CONSTANTES Y VARIABLES PRIVADAS ---
    let _list; // Inicialmente undefined
    const _max = maxElements;

    // Mensajes de error
    const ERROR_1 = "ERROR. La estructura ya ha sido inicializada.";
    const ERROR_2 = "ERROR. La longitud del array supera el máximo permitido.";
    const ERROR_3 = "ERROR. Todos los elementos han de ser números.";

    // --- MÉTODOS PRIVADOS Y HELPERS ---

    // B. Función initialized
    const initialized = () => {
        return typeof _list !== 'undefined';
    };

    // C. Función _checkItems
    // Verifica si un array (o un elemento convertido a array) contiene solo números
    const _checkItems = (items) => {
        const arr = Array.isArray(items) ? items : [items];
        return arr.every(item => typeof item === 'number');
    };

    // D. Función _addItem
    // Intenta añadir un item. Devuelve false si supera la capacidad.
    const _addItem = (number) => {
        if (!initialized()) return false; // Seguridad extra
        
        if (_list.length < _max) {
            _list.push(number);
            return true;
        }
        return false;
    };

    // E. Función _removeItem
    // Borra la primera coincidencia. Siempre devuelve true.
    const _removeItem = (number) => {
        if (!initialized()) return true;

        const index = _list.indexOf(number);
        if (index !== -1) {
            _list.splice(index, 1);
        }
        return true;
    };

    // G. Función getList (internal)
    // Devuelve una COPIA del array
    const getList = () => {
        if (!initialized()) return []; 
        return [..._list];
    };

    // --- MÉTODOS PÚBLICOS EXPUESTOS ---

    // A. Función init
    const init = (initialArray) => {
        // 1. Validar si ya está inicializado
        if (initialized()) {
            return ERROR_1;
        }

        // 2. Validar longitud máxima
        if (initialArray.length > _max) {
            return ERROR_2;
        }

        // 3. Validar tipos (todos números)
        if (!_checkItems(initialArray)) {
            return ERROR_3;
        }

        // 4. Inicialización correcta (guardamos copia para evitar referencia externa)
        _list = [...initialArray];
        return true;
    };

    // F. Función length
    const length = () => {
        return initialized() ? _list.length : 0;
    };

    // H. Función add
    const add = (items) => {
        // 1. Validar tipos
        if (!_checkItems(items)) {
            return ERROR_3;
        }

        // Normalizamos entrada a array
        const itemsToAdd = Array.isArray(items) ? items : [items];
        let allAdded = true;

        // 2. Insertar uno a uno
        itemsToAdd.forEach(num => {
            const success = _addItem(num);
            if (!success) allAdded = false;
        });

        return allAdded;
    };

    // I. Función remove
    const remove = (items) => {
        // 1. Validar tipos
        if (!_checkItems(items)) {
            return ERROR_3;
        }

        // Normalizamos entrada a array
        const itemsToRemove = Array.isArray(items) ? items : [items];

        // 2. Eliminar uno a uno
        itemsToRemove.forEach(num => {
            _removeItem(num);
        });

        return true;
    };

    // RETORNO DEL OBJETO (Interfaz Pública)
    return {
        init: init,
        initialized: initialized,
        length: length,
        items: getList, // Mapeado a getList
        add: add,
        remove: remove
    };
}



/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { numberArray };
