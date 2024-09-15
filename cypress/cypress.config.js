const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor")
module.exports = defineConfig({
  e2e: {

    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
          on("file:preprocessor", cucumber());
        
        },
      },
     });