/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
//Создайте функцию truncate(str, maxlength),
// которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}

