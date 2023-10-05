import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const libertad = require("../../pages/libertad");

When(`el usuario selecciona {string}`, (btnText) => {
  libertad.getGenericButton().contains(btnText).click();
});

When(`completa como dirección {string}`, (addressTxt) => {
  libertad.getAddressModal().should("be.visible");
  libertad.getAddressInput().type(addressTxt);
});

Then(`se visualiza el listado de sugerencias de dirección`, () => {
  libertad.getAddressSuggestions().should("be.visible");
});

When(
  `el usuario selecciona la primera suggerencia que contenga {string}`,
  (addressSuggestion) => {
    libertad
      .getAddressSuggestions()
      .contains(addressSuggestion)
      .first()
      .click();
  }
);

When(`completa el número de la calle con {string}`, (num) => {
  libertad.getNumberInput().type(num);
});

When(`clickea el botón {string}`, (btnName) => {
  cy.contains(btnName).click();
});

Then(`se verifica el mensaje {string}`, (message) => {
  cy.contains(message)
    .invoke("text")
    .then((texto) => {
      cy.log(texto);
    });
});
