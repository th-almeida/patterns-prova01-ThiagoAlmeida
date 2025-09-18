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
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static create(tipo) {
    const Cls = this.types[tipo];
    if (!Cls) {
      throw new Error("Tipo de transporte desconhecido");
    }
    return new Cls();
  }
}

function main() {
  const tipos = ["bicicleta", "patinete", "onibus"];
  tipos.forEach((tipo) => {
    const t = TransporteFactory.create(tipo);
    console.log(t.move());
  });
}

main();


