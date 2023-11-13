
 class TableSor {
  constructor(rowData) {
    this.rowData = rowData;
  }

  createRow() {
    const row = $('<tr></tr>');

    Object.values(this.rowData).forEach(value => {
      row.append($('<td></td>').text(value));
    });

    // Create three buttons for each row
    const editButton = $('<button class="edit-button">✏</button>');
    const deleteButton = $('<button class="delete-button">❌</button>');
    const saveButton = $('<button class="save-button">✔</button>');

    // Add the buttons to the row
    row.append($('<td></td>').append(editButton));
    row.append($('<td></td>').append(deleteButton));
    row.append($('<td></td>').append(saveButton));

    return row;
  }
}
export default TableSor;