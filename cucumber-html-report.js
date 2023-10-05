//BAJAR EL FORMATER
const https = require("https");
const fs = require("fs");
const path = "cucumber-json-formatter.exe";

if (!fs.existsSync(path)) {
  const file = fs.createWriteStream(path);
  https.get(
    "https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-windows-amd64",
    function (response) {
      response.pipe(file);

      file.on("Finalizo", () => {
        file.close();
        console.log("Descarga completa");
      });
    }
  );
} else {
  console.log(`El archivo ${path} ya existe`);
}

//GENERAR EL REPORTE
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/formateado",
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "Local machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
});
