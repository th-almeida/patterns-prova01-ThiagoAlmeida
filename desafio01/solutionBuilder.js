class Lanche {
  constructor(pao, carne, queijo, salada, molho) {
    this.pao = pao;
    this.carne = carne;
    this.queijo = queijo;
    this.salada = salada;
    this.molho = molho;
  }

  show() {
    console.log("Lanche:", {
      pao: this.pao,
      carne: this.carne,
      queijo: this.queijo,
      salada: this.salada,
      molho: this.molho,
    });
  }
}

class LancheBuilder {
  constructor() {
    this.pao = false;
    this.carne = false;
    this.queijo = false;
    this.salada = false;
    this.molho = false;
  }

  setPao(v) {
    this.pao = v;
    return this;
  }

  setCarne(v) {
    this.carne = v;
    return this;
  }

  setQueijo(v) {
    this.queijo = v;
    return this;
  }

  setSalada(v) {
    this.salada = v;
    return this;
  }

  setMolho(v) {
    this.molho = v;
    return this;
  }

  build() {
    return new Lanche(this.pao, this.carne, this.queijo, this.salada, this.molho);
  }
}

const lancheSimples = new LancheBuilder().setPao(true).setCarne(true).build();
const lancheCompleto = new LancheBuilder()
  .setPao(true)
  .setCarne(true)
  .setQueijo(true)
  .setSalada(true)
  .setMolho(true)
  .build();

lancheSimples.show();
lancheCompleto.show();


