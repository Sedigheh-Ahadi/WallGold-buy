const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'https://wallgold.ir/app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
