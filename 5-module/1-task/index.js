/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    let available = row.cells[3].getAttribute("data-available");
    row.classList.add(available === "true" ? "available" : "unavailable");

    if (!row.hasAttribute("hidden")) {
      row.setAttribute("hidden", "false");
    }

    let gender = row.cells[2].innerText;
    row.classList.add(gender === "m" ? "male" : "female");

    let age = 0 + row.cells[1].innerText;
    if (age < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
