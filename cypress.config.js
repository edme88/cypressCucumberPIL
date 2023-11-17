const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");
const fs = require("fs");

module.exports = defineConfig({
  env: {
    TAGS: "not @ignore",
    //Configuración de las URLs
    YVYTU_URL: "https://vientosdelaselva.com.ar/",
    EDEN_URL: "https://www.edenentradas.com.ar/",
    CLARO_URL: "https://tienda.claro.com.ar/",
    DEXTER_URL: "https://www.dexter.com.ar/",
    STORE_URL: "https://automationteststore.com/",
    HIPERLIBERTAD_URL: "https://www.hiperlibertad.com.ar/",
    INTERNET_URL: "https://the-internet.herokuapp.com/iframe",
    //Configuración de los usuarios
    users: [
      {
        user: "XXXXXXXXXXXXXXXX",
        pass: "XXXXXXXXXXXXXXXX",
      },
      {
        user: "YYYYYYYYYYYYYYYYY",
        pass: "YYYYYYYYYYYYYYYY",
      },
    ],
  },
  e2e: {
    hideXHRInCommandLog: true,
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      //require("cypress-image-diff-js/dist/plugin")(on, config);

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        },
        lighthouse: lighthouse((lighthouseReport) => {
          console.log("---- Writing lighthouse report to disk ----");

          fs.writeFile("lighthouse.html", lighthouseReport.report);
        }),
        pa11y: pa11y(console.log.bind(console)),
      });

      return config;
    },
  },
  viewportWith: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    openMode: 0,
    runMode: 0,
  },
  defaultCommandTimeout: 8000,
});
