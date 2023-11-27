class TableSor {
  constructor(rowData) {
    this.rowData = rowData;
  }



  createRow() {
    const row = $('<tr></tr>');
    // Iterálás a rowData objektum értékein, de kihagyjuk a 'created_at' és 'updated_at' kulcsokat
    Object.entries(this.rowData).forEach(([key, value]) => {
      if (key !== 'created_at' && key !== 'updated_at') {
        row.append($('<td></td>').text(value));
      }
    });
  
    // Gombok hozzáadása
    const editButton = $('<button class="edit ">✏</button>');
    const deleteButton = $('<button class="delete">❌</button>');
  
    // Eseménykezelők
    deleteButton.on("click", () => {
      this.esemenyTrigger("Delete", this.rowData.KID);
    });
    editButton.on("click", () => {
      this.esemenyTrigger("edit", this.rowData.KID);
    });
  
    // Gombok hozzáadása a sorhoz
    row.append($('<td></td>').append(editButton));
    row.append($('<td></td>').append(deleteButton));
  
    return row;
  }



  esemenyTrigger(esemenynev, KID) {
    const esemeny = new CustomEvent(esemenynev, {
      detail: KID,
    });
    window.dispatchEvent(esemeny);
  }
}

export default TableSor;
