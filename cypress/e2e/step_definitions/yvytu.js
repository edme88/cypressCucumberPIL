import { Then } from "@badeball/cypress-cucumber-preprocessor";
const yvytuHome = require("../../pages/yvytupage");

Then(`visualiza en el header los botones {string}`, (list) => {
  list = list.split(", ");

  yvytuHome.getMenuAllButton().each((btn, $inx) => {
    if ($inx != 0) {
      cy.wrap(btn).should("have.text", list[$inx - 1]);
    }
  });
});
