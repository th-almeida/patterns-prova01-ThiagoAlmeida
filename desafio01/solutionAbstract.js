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

class HighContrastButton {
  render() {
    return "Botão alto contraste criado";
  }
}
class HighContrastWindow {
  render() {
    return "Janela alto contraste aberta";
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

class HighContrastUIFactory {
  createButton() {
    return new HighContrastButton();
  }
  createWindow() {
    return new HighContrastWindow();
  }
}

const uiRegistry = {
  factories: {},
  register(name, factory) {
    this.factories[name] = factory;
  },
  get(name) {
    return this.factories[name];
  },
};

uiRegistry.register("light", new LightUIFactory());
uiRegistry.register("dark", new DarkUIFactory());
uiRegistry.register("highContrast", new HighContrastUIFactory());

function main(theme) {
  const factory = uiRegistry.get(theme);
  const button = factory.createButton();
  const windowUI = factory.createWindow();
  console.log(button.render());
  console.log(windowUI.render());
}

["light", "dark", "highContrast"].forEach((t) => main(t));


