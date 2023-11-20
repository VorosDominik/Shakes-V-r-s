export class Texturlapelem {
    #key;
    #elemleiro = {};
    constructor(key, elemleiro, szuloelem) {
      this.szuloelem = szuloelem;
      this.#key = key;
      this.#elemleiro = elemleiro;
  
      this.#textElem();
    }
  
    #textElem() {
      
      let txt = `
      <div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">${this.#elemleiro.megj}:</label>
        <input type="${this.#elemleiro.type}" class="form-control" id="${this.#key}" placeholder="${this.#elemleiro.placeholder}" name="${this.#key}" value="${this.#elemleiro.value}" pattern="${this.#elemleiro.regex}">
        <div class="valid lathatosag">ok</div>
        <div class="invalid lathatosag">${this.#elemleiro.valid}</div>
      </div>
      `;
      this.szuloelem.append(txt);
      
    }
  }