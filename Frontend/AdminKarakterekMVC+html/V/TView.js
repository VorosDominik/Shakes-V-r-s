import TableSor from "./TabelSor.js";



 class TView {
  constructor(tableContainer, tableData) {
    this.tableContainer = $(tableContainer);
    this.tableData = tableData;
    
    if (this.tableData && this.tableData.length > 0) {
      this.renderTable();
    }
  }

  renderTable() {
    // Create the table header from the keys of the first item in tableData
    const thead = $('<thead></thead>');
    const headerRow = $('<tr></tr>');

    Object.keys(this.tableData[0]).forEach(key => {
      headerRow.append($('<th></th>').text(key));
    });
console.log("ez történik")
    // Additional columns for the buttons
    headerRow.append($('<th></th>')); // Edit button
    headerRow.append($('<th></th>')); // Delete button
    headerRow.append($('<th></th>')); // Save button

    thead.append(headerRow);
    this.tableContainer.append(thead);

    // Create the table body from tableData
    const tbody = $('<tbody></tbody>');

    for (const item of this.tableData) {
      const row = new TableSor(item).createRow();
      tbody.append(row);
    }

    this.tableContainer.append(tbody);
  }
}
export default TView