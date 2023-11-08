import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`se verifica que el iframe es visible`, () => {
  cy.getIframe("#mce_0_ifr");
});

Then(`se elimina el texto y se escribe {string}`, (texto) => {
  cy.getIframe("#mce_0_ifr").clear().type(texto);
});
