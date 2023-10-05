import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const libertad = require("../../pages/libertad");

When(`el usuario selecciona {string}`, (btnText) => {
  libertad.getGenericButton().contains(btnText).click();
});

When(`completa como dirección {string}`, (addressTxt) => {
  libertad.getAddressModal().should("be.visible");
  libertad.getAddressInput().type(addressTxt);
});
