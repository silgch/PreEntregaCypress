const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app',
    defaultCommandTimeout: 8000,
    watchForFileChanges: false,
    fixturesFolder: 'cypress/fixtures/'
  },
});
