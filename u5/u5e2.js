// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function numberArray(maxSize) {
    // Variables internas (privadas gracias al closure)
    let _list = undefined;
    const _max = maxSize;

    // Constantes de error
    const ERROR_1 = "La estructura ya ha sido inicializada.";
    const ERROR_2 = "La longitud del array supera el máximo permitido.";
    const ERROR_3 = "Todos los elementos deben ser números.";

    // --- FUNCIONES INTERNAS ---

    const _checkItems = (items) => {
        const arrayToCheck = Array.isArray(items) ? items : [items];
        return arrayToCheck.every(item => typeof item === 'number');
    };

    const _addItem = (number) => {
        if (_list.length < _max) {
            _list.push(number);
            return true;
        }
        return false;
    };

    const _removeItem = (number) => {
        const index = _list.indexOf(number);
        if (index !== -1) {
            _list.splice(index, 1);
        }
        return true;
    };

    // --- MÉTODOS PÚBLICOS ---

    const init = (numbers) => {
        if (initialized()) return ERROR_1;
        if (!Array.isArray(numbers)) return ERROR_3;
        if (numbers.length > _max) return ERROR_2;
        if (!_checkItems(numbers)) return ERROR_3;

        _list = [...numbers]; // Copia para evitar mutaciones externas
        return true;
    };

    const initialized = () => _list !== undefined;

    const length = () => (initialized() ? _list.length : 0);

    const getList = () => (initialized() ? [..._list] : []);

    const add = (items) => {
        if (!initialized()) return false;
        if (!_checkItems(items)) return ERROR_3;

        const itemsToAdd = Array.isArray(items) ? items : [items];
        let allAdded = true;

        for (const item of itemsToAdd) {
            if (!_addItem(item)) {
                allAdded = false;
            }
        }
        return allAdded;
    };

    const remove = (items) => {
        if (!initialized()) return false;
        if (!_checkItems(items)) return ERROR_3;

        const itemsToRemove = Array.isArray(items) ? items : [items];
        itemsToRemove.forEach(item => _removeItem(item));
        return true;
    };

    // Retornamos el objeto con la interfaz pública
    return {
        init,
        initialized,
        length,
        items: getList,
        add,
        remove
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
