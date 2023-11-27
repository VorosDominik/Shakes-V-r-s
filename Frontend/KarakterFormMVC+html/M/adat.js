const Urlapleiro = {
  neve: {
    megj: "Karakter Neve:",
    type: "text",
    Mname:"Neve",
    placeholder: "BüszkeBíró",
    value: "",
    regex: "^[A-Z][a-z]{2,15}$",
    valid: "Ha nagybetűvel kezdődik és legalább 3 karakterből, de legfeljebb 15 karakterből áll",
  },


 
 
  Faj: {
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

  Tipus: {
    megj: "Válassz egy Class-t",
    
    type: "radio",
    options: [
      {
        label: "Harcos",
        value: "Harcos",
        image: "/Photos/iconS/Warrior.png"
      },
      {
        label: "ijász",
        value: "ijász",
        image: "/Photos/iconS/archer.png"
      },
      {
        label: "varázsló",
        value: "varázsló",
        image: "/Photos/iconS/mage.png"
      },
    ],
    valid: "Válassz egy fajt",
  },

};

export default Urlapleiro;



