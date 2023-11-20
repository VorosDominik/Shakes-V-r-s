import { Number } from "./Number.js";
import { Texturlapelem } from "./Texturlapelem.js";
import { Check } from "./Check.js";
import { Radio } from "./Radio.js";

class View {
    #leiro = {};
    #urlapadatok = {};

    constructor(szulE, leiro) {
        this.#leiro = leiro;
        this.SzulELEM = $(szulE);
        this.formelem = $("<form></form>");
        this.SzulELEM.append(this.formelem);
        this.#urlaplétrehoz();
    }
    get adatok(){
        return this.#urlapadatok
    }

    #urlaplétrehoz() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    new Texturlapelem(key, this.#leiro[key], this.formelem);
                    break;
                case "number":
                    new Number(key, this.#leiro[key], this.formelem);
                    break;
                case "checkbox":
                    new Check(key, this.#leiro[key], this.formelem);
                    break;
                case "radio":
                    new Radio(key, this.#leiro[key], this.formelem);
                    break;
                default:
                    break;
            }
        }
        this.formelem.append("<input type='submit' id='submit' value='ok'>");

      
        this.formelem.on('submit', (e) => {
            e.preventDefault();
            this.#urlapadatokGyujtese();
        });
    }

    #urlapadatokGyujtese() {
        

        // Végigmegy az összes input elemen
        this.formelem.find('input, select, textarea').each((index, elem) => {
            const element = $(elem);
            const name = element.attr('name'); 
            if (name) {
             
                if (element.is(':checkbox')) {
                   
                    this.#urlapadatok[name] = element.is(':checked');
                } else if (element.is(':radio')) {
                   
                    if (element.is(':checked')) {
                        this.#urlapadatok[name] = element.val();
                    }
                } else {
                   
                    this.#urlapadatok[name] = element.val();
                }
            }
        });

        console.log(this.#urlapadatok); 
    }
}


export default View;