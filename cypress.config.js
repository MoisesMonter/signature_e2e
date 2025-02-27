const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  viewportWidth: 1600,       // Largura padrão da tela
  viewportHeight: 900,       // Altura padrão da tela
  defaultCommandTimeout: 10000, // Tempo de espera padrão de 10 segundos
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});