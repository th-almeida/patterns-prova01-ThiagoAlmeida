class Lanche {
  constructor(pao, carne, queijo, salada, molho) {
    this.pao = pao;
    this.carne = carne;
    this.queijo = queijo;
    this.salada = salada;
    this.molho = molho;
  }

  show() {
    console.log("Lanche:", { pao: this.pao, carne: this.carne, queijo: this.queijo, salada: this.salada, molho: this.molho });
  }
}

class LancheBuilder {
  constructor() {
    this.pao = false;
    this.carne = false;
    this.queijo = false;
    this.salada = false;
    this.molho = false;
    this.preco = 0;
  }

  setPao(v) {
    this.pao = v;
    if (v) this.preco += 3;
    return this;
  }

  setCarne(v) {
    this.carne = v;
    if (v) this.preco += 8;
    return this;
  }

  setQueijo(v) {
    this.queijo = v;
    if (v) this.preco += 4;
    return this;
  }

  setSalada(v) {
    this.salada = v;
    if (v) this.preco += 2;
    return this;
  }

  setMolho(v) {
    this.molho = v;
    if (v) this.preco += 1.5;
    return this;
  }

  build() {
    const lanche = new Lanche(this.pao, this.carne, this.queijo, this.salada, this.molho);
    lanche.preco = this.preco;
    return lanche;
  }
}

class CardapioDirector {
  static montarSimples() {
    return new LancheBuilder().setPao(true).setCarne(true).build();
  }
  static montarCompleto() {
    return new LancheBuilder()
  .setPao(true)
  .setCarne(true)
  .setQueijo(true)
  .setSalada(true)
  .setMolho(true)
  .build();
  }
  static montarVegano() {
    return new LancheBuilder().setPao(true).setSalada(true).setMolho(true).build();
  }
}

const lancheSimples = CardapioDirector.montarSimples();
const lancheCompleto = CardapioDirector.montarCompleto();
const lancheVegano = CardapioDirector.montarVegano();

lancheSimples.show();
lancheCompleto.show();
lancheVegano.show();


