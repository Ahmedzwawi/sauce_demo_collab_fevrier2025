const { defineConfig } = require("cypress");
const grep = require("@cypress/grep/src/plugin");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',},
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      grep(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      
      return config;    },
  },
});

