const { defineConfig } = require("cypress");
const grep = require("@cypress/grep/src/plugin");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // a ajouter
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      grep(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);// a ajouter
      
      return config;    },
  },
});

