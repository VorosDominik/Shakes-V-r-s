import Modell from "../Modell/Log.js"

import View from "../View/FORMS.js"



class Controll{



constructor(){
    console.log("edig okés")
    this.UrlapModell= new Modell()
    this.UrlapView= new View($("#LOG"),this.UrlapModell.leiro)
    this.submitElem = $("#submit")

    this.submitElem.on(click, (e)=>{

        e.preventdefault();
    })


}

}
export default Controll