export class TabelOsz{
    #key;
    #elemleiro = {};
    constructor(key, elemleiro, szuloelem) 
    {
        this.szuloelem = szuloelem;
        this.#key = key;
        this.#elemleiro = elemleiro;
        console.log("a leirok: ",this.#elemleiro.key)
        this.#textElem();
       
    }


    #textElem() {
        let txt = `
        
        <th>${this.#elemleiro.key}</th>
       


        `;
       
        this.szuloelem.append(txt);
      }
}