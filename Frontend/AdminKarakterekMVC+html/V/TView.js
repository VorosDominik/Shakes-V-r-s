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
  
    // Kizárjuk a 'created_at' és 'updated_at' oszlopokat
    Object.keys(this.tableData[0])
      .filter(key => key !== 'created_at' && key !== 'updated_at')
      .forEach(key => {
        headerRow.append($('<th></th>').text(key));
      });
  
    // Additional columns for the buttons
    headerRow.append($('<th></th>')); // Edit button
    headerRow.append($('<th></th>')); // Delete button

  
    thead.append(headerRow);
    this.tableContainer.append(thead);
  
    // Create the table body from tableData
    const tbody = $('<tbody></tbody>');
  
    for (const item of this.tableData) {
      // Itt is használjuk a TableSor osztályt, amely már kihagyja a két oszlopot
      const row = new TableSor(item).createRow();
      tbody.append(row);
    }
  
    this.tableContainer.append(tbody);
  }
}
export default TView