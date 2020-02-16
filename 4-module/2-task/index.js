/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].cells;
    for (let j = 0; j < cells.length; j++) {
      if (i === j) {
        let element = cells[j];
        element.style.backgroundColor = "red";
      }
    }
  }
}
