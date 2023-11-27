
import DataService from "../M/DataService.js";

import HibaView from "../V/HibaView.js";
import TView from "../V/TView.js";



export class AKController {
    
    constructor() {
      this.postALAP = this.postALAP.bind(this);

    
    console.log("eddig patika");
    this.DatS = new DataService();
    this.submitElem = $("#submit")

    
    
    this.actadatok=this.DatS.getAxiosData("http://localhost:8000/api/karakter/osszes", this.adatokMegj, this.hibamegj);

  
    $(window).on("Delete", (event) => {
      console.log(event.detail);
     
    
    });
    $(window).on("Delete", (event) => {
      console.log(event.detail); // A törölni kívánt sor KID azonosítója
      this.DatS.deleteAxiosData("http://localhost:8000/api/Karakter/DELETE", event.detail)
          .then(() => {
              // Eltávolítjuk a táblázat jelenlegi tartalmát
              $("#karakterek").empty();
  
              // Sikeres törlés után újra lekérjük az adatokat
              this.DatS.getAxiosData("http://localhost:8000/api/karakter/osszes", this.adatokMegj, this.hibamegj);
          })
          .catch(error => {
              console.error("Hiba történt a törlés során", error);
              // Hiba kezelése
          });




    
  });

  $(window).on("edit", (event) => {
    console.log(event.detail); // Az szerkeszteni kívánt sor KID azonosítója
    this.showEditModal(event.detail);
  });
 
  
  
 
  
  }
 postALAP(ADAT) {
  console.log(ADAT);

  // Ellenőrizzük, hogy létezik-e már a szerkesztési modal
  if ($('#editModal').length === 0) {
    // Ha nem, akkor hozzuk létre
    $('body').append(`
      <div id="editModal" class="modal">
     
        <div class="modal-content">
          <span class="close">&times;</span>
          <form id="editForm">
          <header><h1>ÉPP Szerkezti: ${ADAT.KID} karaktert</h1></header>
            <label for="nev">Név:</label>
            <input type="text" id="nev" name="nev">
            <label for="faj">Faj:</label>
            <input type="text" id="faj" name="faj">
            <label for="tipus">Típus:</label>
            <input type="text" id="tipus" name="tipus">
            <label for="tulaj">Tulaj:</label>
            <input type="text" id="tulaj" name="tulaj">
            <input type="submit" value="Változtat!!!">
          </form>
        </div>
      </div>
    `);

    // Itt hozzáadjuk az eseménykezelőket
    $('#editModal .close').on('click', function() {
      $('#editModal').css('display', 'none');
      location.reload();
    });
    this.addModalEventHandlers(ADAT.KID);
  }

  // Itt töltjük fel az adatokkal a modalt
  $('#editModal input[name="nev"]').val(ADAT.Neve);
  $('#editModal input[name="faj"]').val(ADAT.Faj);
  $('#editModal input[name="tipus"]').val(ADAT.Tipus);
  $('#editModal input[name="tulaj"]').val(ADAT.Tulaj);

  // Megjelenítjük a modalt
  $('#editModal').css('display', 'block');
}

// Új metódus az eseménykezelők hozzáadására




addModalEventHandlers(kid) {
  $('#editForm').off('submit').on('submit', (e) => {
    e.preventDefault();

    const karakterData = {
      Neve: $('#editModal input[name="nev"]').val(),
      Faj: $('#editModal input[name="faj"]').val(),
      Tipus: $('#editModal input[name="tipus"]').val(),
      Tulaj: $('#editModal input[name="tulaj"]').val()
    };

    var posturl = `http://localhost:8000/api/karakter/${kid}`;
    console.log("ez a posz url :" + posturl);

    this.DatS.putAxiosData(posturl, karakterData)
      .then(() => {
        $('#editModal').css('display', 'none');
        // Sikeres frissítés után újra lekérjük az adatokat
       
        location.reload();
       
      })
      .catch(error => {
        console.error("Hiba történt a frissítés során", error);
        // Hiba kezelése
      });
  });
}




  adatokMegj(lista) {
    console.log(lista);
    new TView("#karakterek",  lista);
  }

  hibamegj(error) {
    console.log(error);
    new HibaView(error, $("#hiba"));
  }



  showEditModal(KID) {
    var GETKID=`http://localhost:8000/api/karakter/${KID}`
    console.log(GETKID)
    this.DatS.getAxiosData(GETKID,this.postALAP,this.hibamegj)
   

  }
}



