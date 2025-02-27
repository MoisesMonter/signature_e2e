const { defineConfig } = require('cypress');
require('dotenv').config(); // Carrega as variáveis do .env
require('cypress-plugin-tab'); // Plugin para suporte a tabs

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:8081', // Usa o .env ou fallback
    setupNodeEvents(on, config) {
      require('cypress-real-events/plugin')(on, config); // Plugin para eventos reais
      return config; // Retorna a config modificada
    },
  },
});