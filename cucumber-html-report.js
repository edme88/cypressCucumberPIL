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
