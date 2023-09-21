import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const claroHome = require("../../pages/homeClaro");

When(`posiciona el mouse sobre {string}`, (option) => {
  claroHome.getHeaderOptionMenu().contains(option).realHover();
});
