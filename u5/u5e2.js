// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function numberArray(maxSize) {
  // Constantes de error
  const ERROR_1 = "La estructura ya ha sido inicializada.";
  const ERROR_2 = "La longitud del array supera el máximo permitido.";
  const ERROR_3 = "Todos los elementos deben ser números.";

  // Variables internas (Estado de la closure)
  let _list = undefined;
  const _max = maxSize;

  // --- Funciones Internas ---

  const _checkItems = (items) => {
    const target = Array.isArray(items) ? items : [items];
    return target.every(item => typeof item === 'number');
  };

  const _addItem = (num) => {
    if (_list.length < _max) {
      _list.push(num);
      return true;
    }
    return false;
  };

  const _removeItem = (num) => {
    const index = _list.indexOf(num);
    if (index !== -1) {
      _list.splice(index, 1);
    }
    return true;
  };

  // --- Métodos Expuestos ---

  const init = (arr) => {
    if (initialized()) return ERROR_1;
    if (arr.length > _max) return ERROR_2;
    if (!_checkItems(arr)) return ERROR_3;

    _list = [...arr]; // Inicializamos con una copia
    return true;
  };

  const initialized = () => _list !== undefined;

  const length = () => {
    if (!initialized()) return undefined;
    return _list.length;
  };

  const getList = () => {
    if (!initialized()) return [];
    return [..._list]; // Devolvemos una COPIA
  };

  const add = (items) => {
    if (!initialized()) return false;
    if (!_checkItems(items)) return ERROR_3;

    const toAdd = Array.isArray(items) ? items : [items];
    let allAdded = true;

    for (const item of toAdd) {
      if (!_addItem(item)) {
        allAdded = false;
      }
    }
    return allAdded;
  };

  const remove = (items) => {
    if (!initialized()) return false;
    if (!_checkItems(items)) return ERROR_3;

    const toRemove = Array.isArray(items) ? items : [items];
    for (const item of toRemove) {
      _removeItem(item);
    }
    return true;
  };

  // Retorno del objeto con la interfaz pública
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
