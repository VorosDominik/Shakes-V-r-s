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
    this.submitElem.on("click", (event) => {
        
       
        
        let urlapadat = this.UrlapView.urlapadatokGyujtese();
        console.log("ezek az adatok:", JSON.stringify(urlapadat));
// vagy
console.log("ezek az adatok:", urlapadat);

            // Elküldjük az űrlap adatait a helyes URL-re
            this.DataService.postAxiosData("http://localhost:8000/api/karakter/hozzaAD", {
                "Neve": urlapadat.neve,
                "Tulaj": 1,
                "Faj": urlapadat.Faj,
                "Tipus": urlapadat.Tipus
               
            });
            console.log(urlapadat.Faj)
            console.log(urlapadat.neve);
    
       
       
    });

 
}

}
export default Controll