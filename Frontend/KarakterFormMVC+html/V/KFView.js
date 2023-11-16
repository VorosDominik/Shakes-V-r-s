import { Number } from "./Number.js";
import { Texturlapelem } from "./Texturlapelem.js";
import { Check } from "./Check.js";
import { Radio } from "./Radio.js";

class View {
    #leiro = {};

    constructor(szulE, leiro) {
        console.log("MUHHAHAHAHAHA");
        this.#leiro = leiro;
        this.SzulELEM = $(szulE);
        this.formelem = $("<form></form>");
        this.SzulELEM.append(this.formelem);
        console.log(this.formelem);
        this.#urlaplétrehoz();
    }

    #urlaplétrehoz() {
        let txt = "";
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
        txt += "<input type='submit' value='ok'>";

        this.formelem.append(txt);
    }
}

export default View;