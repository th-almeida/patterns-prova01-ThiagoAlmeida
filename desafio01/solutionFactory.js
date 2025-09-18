class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class TransporteFactory {
  static types = { bicicleta: Bicicleta, patinete: Patinete, onibus: Onibus };
  static rules = [];

  static register(name, cls) {
    this.types[name] = cls;
  }

  static registerRule(predicate, resolve) {
    this.rules.push({ predicate, resolve });
  }

  static create(tipo, contexto = {}) {
    const rule = this.rules.find((r) => r.predicate(tipo, contexto));
    if (rule) {
      return rule.resolve(tipo, contexto);
    }
    const Cls = this.types[tipo];
    if (!Cls) {
      throw new Error("Tipo de transporte desconhecido");
    }
    return new Cls();
  }
}

function main() {
  TransporteFactory.registerRule(
    (tipo, ctx) => tipo === "bicicleta" && ctx.chovendo === true,
    () => new Onibus()
  );
  const cenarios = [
    { tipo: "bicicleta", contexto: { chovendo: true } },
    { tipo: "bicicleta", contexto: { chovendo: false } },
    { tipo: "patinete", contexto: {} },
    { tipo: "onibus", contexto: {} },
  ];
  cenarios.forEach(({ tipo, contexto }) => {
    const t = TransporteFactory.create(tipo, contexto);
    console.log(t.move());
  });
}

main();


