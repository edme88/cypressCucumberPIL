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
};
