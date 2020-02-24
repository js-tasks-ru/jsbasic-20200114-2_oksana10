/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
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
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.items = items;

  let thead = document.createElement('thead');
  let header = document.createElement('tr');
  thead.appendChild(header);

  for (let key in items[0]) {
    let cell = document.createElement('td');
    cell.textContent = ucFirst(key);
    header.appendChild(cell);
  }

  this.el.appendChild(thead);

  this.render = items => {
    let body = this.el.getElementsByTagName('tbody')[0];
    if (body) {
      this.el.removeChild(body);
    }

    body = document.createElement('tbody');

    for (let i = 0; i < items.length; i++) {
      let row = document.createElement('tr');

      for (let key in items[i]) {
        let cell = document.createElement('td');
        cell.textContent = items[i][key];
        row.appendChild(cell);
      }

      body.appendChild(row);
    }

    this.el.appendChild(body);
  };

  this.render(items);
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let comp = desc ? -1 : 1;
    this.items = this.items.sort((a, b) => Object.values(a)[column] > Object.values(b)[column] ? comp : -comp);
    this.render(this.items);
  };
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
