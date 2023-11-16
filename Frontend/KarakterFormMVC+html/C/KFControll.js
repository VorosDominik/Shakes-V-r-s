import Modell from "../M/Modell.js"
import View from "../V/KFView.js"


class Controll{



constructor(){
    console.log("edig okés")
    this.UrlapModell= new Modell()
    this.UrlapView= new View($("#karaktergeneralas"),this.UrlapModell.leiro)
}

}
export default Controll