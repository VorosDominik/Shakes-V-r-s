export class Radio {
    #key;
    #elemleiro = {};
    constructor(key, elemleiro, szuloelem) {
        this.szuloelem = szuloelem;
        this.#key = key;
        this.#elemleiro = elemleiro;

        this.#radioElem();
    }

    #radioElem() {
        let radioDiv = document.createElement("div");
        radioDiv.className = "mb-3 mt-3";

        
        let label = document.createElement("label");
        label.textContent = this.#elemleiro.megj;

        radioDiv.append(label);

        for (const option of this.#elemleiro.options) {
            let input = document.createElement("input");
            input.type = this.#elemleiro.type;
            input.className = "form-check-input";
            input.id = `${this.#key}-${option.value}`;
            input.name = this.#key;
            input.value = option.value;

            if (option.checked) {
                input.checked = true;
            }

            let radioLabelDiv = document.createElement("div");
            radioLabelDiv.className = "form-check";

            let optionLabel = document.createElement("label");
            optionLabel.className = "form-check-label";
            optionLabel.htmlFor = input.id;
            optionLabel.textContent = option.label;

            radioLabelDiv.append(input);
            radioLabelDiv.append(optionLabel);

            radioDiv.append(radioLabelDiv);
        }

        this.szuloelem.append(radioDiv);
    }
}