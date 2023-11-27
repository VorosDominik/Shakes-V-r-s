import Modell from "../M/Modell.js"
import View from "../V/KFView.js"
import DataService from "../../AdminKarakterekMVC+html/M/DataService.js"


class Controll{



constructor(){
    console.log("edig okés")
    this.UrlapModell= new Modell()
    this.UrlapView= new View($("#karaktergeneralas"),this.UrlapModell.leiro)
    this.submitElem = $("#submit")
    this.DataService= new DataService()
    const url = "http://localhost:8000/api/karakter/hozzaAD";

    // Az adat, amit a kérés tartalmazni fog (pl. karakter adatai)
    const data = {
        "Neve": "Alma",
        "Tulaj": "1",
        "Faj": "Orc",
        "Tipus": "Harcos"
    };
    console.log(data)
    
    // Hívd meg a postAxiosData függvényt, hogy elküldje a POST kérést
    this.DataService.postAxiosData(url, data);
  

 
}

}
export default Controll