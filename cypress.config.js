const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    retries:{
      // runMode: 2,
      // openMode: 3
    },
    reporter: 'cypress-mochawesome-reporter',
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    chromeWebSecurity: false
  },

});
