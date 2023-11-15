// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
const compareSnapshotCommand = require("cypress-image-diff-js/dist/command");
compareSnapshotCommand();
import "cypress-axe";

// Alternatively you can use CommonJS syntax:
// require('./commands')

if (Cypress.config("hideXHRInCommandLog")) {
  const app = window.top;
  if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
  ) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
  }
}

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

terminal = (violations) => {
  const violantionData = violations.map(
    ({ id, impact, tags, description, help, helpUrl, nodes }) => ({
      id,
      impact,
      tags,
      description,
      help,
      helpUrl,
      "información de nodos": nodes,
      "cantidad de nodos": nodes.length,
    })
  );

  cy.log(JSON.stringify(violantionData));
  cy.writeFile(
    `cypress/fixtures/accesibilidad/basic_axe_report.json`,
    violantionData
  );
  completeReportHTML(violations);
};

completeReportHTML = (violations) => {
  //Obtener los valores que necesito escribir en el reporte
  let erroresTotales = violations.length;
  let fechaEjecucion = new Date().toLocaleDateString("es-AR");
  let ambiente = Cypress.env("ENV");
  let urlWeb = Cypress.env(`${ambiente}_URL`);
  let cantidadErroresCriticos = violations.filter(
    (value) => value.impact === "critical"
  ).length;
  let cantidadErroresSerios = violations.filter(
    (value) => value.impact === "serious"
  ).length;
  let cantidadErroresModerados = violations.filter(
    (value) => value.impact === "moderate"
  ).length;
  let cantidadErroresMenores = violations.filter(
    (value) => value.impact === "minor"
  ).length;

  //Leer el template
  cy.readFile(`template/report_template.html`).then((template) => {
    template = template.replace("${total_violations}", erroresTotales);
    template = template.replace("${target_url}", urlWeb);
    template = template.replace("${date_run}", fechaEjecucion);
    template = template.replace("${qty_critical}", cantidadErroresCriticos);
    template = template.replace("${qty_serious}", cantidadErroresSerios);
    template = template.replace("${qty_moderate}", cantidadErroresModerados);
    template = template.replace("${qty_minor}", cantidadErroresMenores);

    //Escribir reporte con estos datos
    cy.writeFile(
      `cypress/fixtures/accesibilidad/axe_complete_report.html`,
      template
    );
  });
};
