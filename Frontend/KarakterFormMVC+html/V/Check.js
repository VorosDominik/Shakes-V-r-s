export class Check {
    #key;
    #elemleiro = {};
    constructor(key, elemleiro, szuloelem) {
        this.szuloelem = szuloelem;
        this.#key = key;
        this.#elemleiro = elemleiro;

        this.#checkboxElem();
    }

    #checkboxElem() {
        let checkedAttr = this.#elemleiro.checked ? 'checked' : '';
        let txt = `
        <div class="mb-3 mt-3">
            <div class="form-check">
                <input type="${this.#elemleiro.type}" class="form-check-input" id="${this.#key}" name="${this.#key}" value="${this.#elemleiro.value}" ${checkedAttr}>
                <label class="form-check-label" for="${this.#key}">${this.#elemleiro.megj}</label>
            </div>
        </div>
        `;
        this.szuloelem.append(txt);
    }
}