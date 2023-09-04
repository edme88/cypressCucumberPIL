import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario está en la página de {string}`, (urlName) => {
  if (urlName == "Yvytu") {
    cy.visit("https://vientosdelaselva.com.ar/");
  }
});
