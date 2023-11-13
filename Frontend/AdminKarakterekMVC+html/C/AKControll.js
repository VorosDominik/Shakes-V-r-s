import DataService from "../M/DataService.js";
import { karakterek } from "../M/adatok.js";
import HibaView from "../V/HibaView.js";
import TView from "../V/TView.js";
import TableSor from "../V/TabelSor.js";


export class AKController {
    
    constructor() {
    

    
    console.log("eddig patika");
    this.DatS = new DataService();
    
    
    
    this.DatS.getAxiosData("http://127.0.0.1:8000/karakterfaj/osszes", this.adatokMegj, this.hibamegj);
  }

  adatokMegj(lista) {
    console.log(lista);
    new TView("#karakterek",  lista);
  }

  hibamegj(error) {
    console.log(error);
    new HibaView(error, $("#hiba"));
  }
}
