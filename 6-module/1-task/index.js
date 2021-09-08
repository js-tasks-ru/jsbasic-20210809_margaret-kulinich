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
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.inputTableItems();
    this.elem.addEventListener('click', (event) => this.deleteRow(event));
  }

  inputTableItems() {
    this.elem.innerHTML =
      `<thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        ${this.rows.map(item =>
        `<tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>
            <td><button>[X]</button></td>
          </tr>`)
          .join("")}
        </tbody>`;
  }

  deleteRow(event) {
    let target = event.target.closest('button');

    if (!target) return;

    target.closest('tr').remove();
  }
}