import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario está en la página de {string}`, (urlName) => {
  const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.viewport("macbook-16");
  cy.visit(url);
});

Then(`se compara {string} con la imagen base`, (imageName) => {
  cy.compareSnapshot(imageName);
});
