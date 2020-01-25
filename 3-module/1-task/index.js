/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = '';
  for (let i = 0; i <= data.length - 1; i++) {
    let user = data[i];
    if (user.age <= age) {
      result += user.name + ', ' + user.balance + '\n';
    }
  }
  return result.trim();
}

