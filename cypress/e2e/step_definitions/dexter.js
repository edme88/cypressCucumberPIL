import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const claroHome = require("../../pages/homeClaro");

When(`clickea la opción {string}`, (txt) => {
  cy.contains(txt).click();
});

When(`realiza scroll hasta {string}`, (text) => {
  cy.contains(text).scrollIntoView();
});
