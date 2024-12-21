const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    retries:{
      // runMode: 2,
      // openMode: 3
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    chromeWebSecurity: false
  },

});
