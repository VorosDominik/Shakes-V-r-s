const Urlapleiro = {
  neve: {
    megj: "Karakter Neve:",
    type: "text",
    Mname:"Kname",
    placeholder: "BüszkeBíró",
    value: "",
    regex: "^[A-Z][a-z]{2,15}$",
    valid: "Ha nagybetűvel kezdődik és legalább 3 karakterből, de legfeljebb 15 karakterből áll",
  },
 
 
  Kfaj: {
    megj: "Válassz egy fajt",
    type: "radio",
    options: [
      {
        label: "orc",
        value: "ORC",
        image: "/Photos/iconS/orc-male.png" // A helyes útvonal
      },
      {
        label: "ELF",
        value: "ELF",
        image: "/Photos/iconS/elf-feamel.png" // A helyes útvonal
      },
      {
        label: "Dwarf",
        value: "Dwarf",
        image: "/Photos/iconS/dwarf-male.png" // Feltételezett helyes útvonal
      },
    ],
    valid: "Válassz egy fajt",
  },

  KTipus: {
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



