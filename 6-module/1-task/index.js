/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;

    this.el.classList.add('pure-table');

    let thead = document.createElement('thead');
    let header = document.createElement('tr');
    thead.appendChild(header);

    let columns = ["Name", "Age", "Salary", "City", ""];
    columns.forEach(element => {
      let cell = document.createElement('td');
      cell.textContent = element;
      header.appendChild(cell);
    });

    this.el.appendChild(thead);

    this.render(this.data);
  }

  render(items) {
    let body = this.el.getElementsByTagName('tbody')[0];
    if (body) {
      this.el.removeChild(body);
    }

    body = document.createElement('tbody');

    for (let i = 0; i < items.length; i++) {
      let row = document.createElement('tr');

      for (let key in items[i]) {
        if (key === 'id') {continue;}

        let cell = document.createElement('td');
        cell.textContent = items[i][key];
        row.appendChild(cell);
      }

      let cell = document.createElement('td');

      let anc = document.createElement('a');
      anc.textContent = 'X';
      anc.href = '#delete';
      anc.onclick = () => this.onRemoved(items[i].id);
      cell.appendChild(anc);

      row.appendChild(cell);

      body.appendChild(row);
    }

    this.el.appendChild(body);
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    this.data = this.data.filter(x => x.id !== id);
    this.render(this.data);
  }
}

window.ClearedTable = ClearedTable;
