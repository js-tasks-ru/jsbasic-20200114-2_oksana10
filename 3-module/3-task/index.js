/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let cat = str.split('-');
  for (let i = 1; i < cat.length; i++) {
    cat[i] = ucFirst(cat[i]);
  }

  return cat.join('');
}

function ucFirst(str) {
  if (str === '') {
    return '';
  }
  if (str.length === 1) {
    return str.toUpperCase();
  }
  return str[0].toUpperCase() + str.slice(1);
}
