/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0;
  for (let prop in salaries) {
    let salary = salaries[prop];
    if (typeof salary === 'number') {
      result += salary;
    }
  }

  return result;
}
