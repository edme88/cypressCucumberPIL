import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const claroHome = require("../../pages/homeClaro");

When(`posiciona el mouse sobre {string}`, (option) => {
  claroHome.getHeaderOptionMenu().contains(option).realHover();
});

Then(`se visualizan las opciones {string}`, (lista) => {
  lista = lista.split(", ");
  claroHome.getHeaderSuboptionMenu().should("be.visible");
  lista.forEach((supOption) => {
    claroHome
      .getHeaderSuboptionMenu()
      .find("a")
      .should("contain.text", supOption);
  });
});
