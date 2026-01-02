// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

class ClassroomReport {
  // Propiedad privada
  #studentList;

  // A. Constructor
  constructor(studentList = []) {
    this.#studentList = studentList;
  }

  // B. Getter y Setter
  get studentList() {
    return this.#studentList;
  }

  set studentList(newList) {
    this.#studentList = newList;
  }

  // Método auxiliar para filtrar según el estado activo
  #getFilteredList(excludeInactive) {
    return excludeInactive 
      ? this.#studentList.filter(student => student.active) 
      : this.#studentList;
  }

  // C. Método getStudentsNumber
  getStudentsNumber(excludeInactive = true) {
    const list = this.#getFilteredList(excludeInactive);
    return list.reduce((count) => count + 1, 0);
  }

  // D. Método averageScore
  averageScore(excludeInactive = true) {
    const list = this.#getFilteredList(excludeInactive);
    if (list.length === 0) return 0;

    const totalScore = list.reduce((acc, student) => acc + student.score, 0);
    return Number((totalScore / list.length).toFixed(2));
  }

  // E. Método bestStudent
  bestStudent(excludeInactive = true) {
    const list = this.#getFilteredList(excludeInactive);
    if (list.length === 0) return null;

    let best = list[0];
    list.forEach(student => {
      if (student.score >= best.score) {
        best = student;
      }
    });
    return best;
  }

  // F. Método worstStudent
  worstStudent(excludeInactive = true) {
    const list = this.#getFilteredList(excludeInactive);
    if (list.length === 0) return null;

    let worst = list[0];
    list.forEach(student => {
      if (student.score <= worst.score) {
        worst = student;
      }
    });
    return worst;
  }

  // G. Método passedCount
  passedCount(excludeInactive = true) {
    const list = this.#getFilteredList(excludeInactive);
    return list.reduce((count, student) => {
      return student.score >= 5 ? count + 1 : count;
    }, 0);
  }

  // H. Método failedCount
  failedCount(excludeInactive = true) {
    const list = this.#getFilteredList(excludeInactive);
    return list.reduce((count, student) => {
      return student.score < 5 ? count + 1 : count;
    }, 0);
  }
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };
