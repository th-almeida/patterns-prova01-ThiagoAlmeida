class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    this.settings = {};
    Config.instance = this;
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }
}

const Global = Object.freeze({ config: new Config() });

const c1 = Global.config;
c1.setConfig("lang", "pt-BR");
c1.setConfig("tema", "dark");

const c2 = Global.config;
console.log(c2.getConfig("lang"));
console.log(c2.getConfig("tema"));


