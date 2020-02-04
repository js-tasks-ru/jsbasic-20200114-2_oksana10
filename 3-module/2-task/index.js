/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let array = str
    .split(',')
    .join(' ')
    .split(' ')
    .map(x => +x)
    .filter(x => !isNaN(x));

  return {min: Math.min(...array), max: Math.max(...array)};
}

