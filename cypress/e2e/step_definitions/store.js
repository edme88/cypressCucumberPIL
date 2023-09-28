import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const store = require("../../pages/store");
const storeLogin = require("../../pages/storeLogin");
const storeAccount = require("../../pages/storeAccount");

When(`el usuario presiona {string} en el menu principal`, (opcion) => {
  store.getHeaderLinks().contains(opcion).click();
});

When(`completa usuario y password {string}`, (num) => {
  const userData = Cypress.env().users[num - 1];
  cy.log(userData);
  storeLogin.getLoginInput().type(userData.user);
  storeLogin.getPassInput().type(userData.pass);
  storeLogin.getLoginBtn().click();
});

Then(`se verifica que el título principal es {string}`, (title) => {
  storeAccount.getMainTitle().should("contain.text", title);
});
