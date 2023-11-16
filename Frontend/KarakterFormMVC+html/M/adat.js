const Urlapleiro = {
  neve: {
    megj: "Karakter Neve:",
    type: "text",
    placeholder: "BüszkeBíró",
    value: "",
    regex: "^[A-Z][a-z]{2,15}$",
    valid: "Ha nagybetűvel kezdődik és legalább 3 karakterből, de legfeljebb 15 karakterből áll",
  },
 
 
  radio: {
    megj: "Válassz egy fajt",
    type: "radio",
    options: [
      {
        label: "ORC",
        value: "ORC",
      },
      {
        label: "ELF",
        value: "ELF",
      },
      {
        label: "Dwarf",
        value: "Dwarf",
      },
    ],
    valid: "Válassz egy fajt",
  },

  radio2: {
    megj: "Válassz egy Class-t",
    type: "radio",
    options: [
      {
        label: "Harcos",
        value: "Harcos",
      },
      {
        label: "ijász",
        value: "ijász",
      },
      {
        label: "varázsló",
        value: "varázsló",
      },
    ],
    valid: "Válassz egy fajt",
  },


  check: {
    megj: "Vágod mindenben bennevagyok",
    type: "checkbox",
    checked: false,
    valid: "A feltételeket el kell fogadni",
  },
};

export default Urlapleiro;



