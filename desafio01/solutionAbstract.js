class LightButton {
  render() {
    return "Botão branco criado";
  }
}
class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}
class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

class LightUIFactory {
  createButton() {
    return new LightButton();
  }
  createWindow() {
    return new LightWindow();
  }
}

class DarkUIFactory {
  createButton() {
    return new DarkButton();
  }
  createWindow() {
    return new DarkWindow();
  }
}

const factories = {
  light: new LightUIFactory(),
  dark: new DarkUIFactory(),
};

function main(theme) {
  const factory = factories[theme];
  const button = factory.createButton();
  const windowUI = factory.createWindow();
  console.log(button.render());
  console.log(windowUI.render());
}

["light", "dark"].forEach((t) => main(t));


