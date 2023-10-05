import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const dexter = require("../../pages/dexter");

When(`clickea la opción {string}`, (txt) => {
  cy.contains(txt).click();
});

When(`realiza scroll hasta {string}`, (text) => {
  cy.contains(text).scrollIntoView();
});

When(`selecciona la opción de {string}`, (opcion) => {
  dexter.getBrandLink().each((brand) => {
    cy.wrap(brand)
      .should("have.attr", "href")
      .then((textoHref) => {
        cy.log(`**${textoHref}**`);

        if (textoHref.includes(opcion)) {
          cy.wrap(brand).click({ force: true });
        } else {
          dexter.getRightArrow().first().click({ force: true });
          //dexter.getRightArrow().eq(0).click();
        }
      });
  });
});
