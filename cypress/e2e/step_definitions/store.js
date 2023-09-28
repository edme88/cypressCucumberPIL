import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const store = require("../../pages/store");
const storeLogin = require("../../pages/storeLogin");
const storeAccount = require("../../pages/storeAccount");

When(`el usuario presiona {string} en el menu principal`, (opcion) => {
  store.getHeaderLinks().contains(opcion).click();
});

When(`el usuario realiza hover en {string}`, (opcion) => {
  store.getHeaderLinks().contains(opcion).trigger("mouseover");
});

When(`el usuario realiza logout`, () => {
  store.getHeaderLinks().contains("Welcome back").trigger("mouseover");
  cy.contains("LogOff", { matchCase: false }).click();
});

When(`completa usuario y password {string}`, (num) => {
  const userData = Cypress.env().users[num - 1];
  cy.log(userData);

  //Login empleando función dentro del pageObject
  storeLogin.login(userData.user, userData.pass);

  //Login usando un comando en el support/commands.js
  //cy.login(userData.user, userData.pass);

  //Login empleando cada método del pageObject
  /*storeLogin.getLoginInput().type(userData.user);
  storeLogin.getPassInput().type(userData.pass);
  storeLogin.getLoginBtn().click();*/
});

Then(`se verifica que el título principal es {string}`, (title) => {
  storeAccount.getMainTitle().should("contain.text", title);
});
