import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario está en la página de {string}`, (urlName) => {
  const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.viewport("macbook-16");
  cy.visit(url);
});

Then(`se compara {string} con la imagen base`, (imageName) => {
  //cy.compareSnapshot(imageName);
});

Then(
  `se verifica que el elemento {string} posee los atributos`,
  (locator, tabla) => {
    tabla = tabla.rows();

    tabla.forEach((element) => {
      const propertyCSS = element[0];
      const propertyCSSvalue = element[1];
      const txtLog = element[2];
      //cy.get(locator).should("have.css", propertyCSS, propertyCSSvalue);
      cy.get(locator).should(($ele) => {
        const cssCheck = $ele.css(propertyCSS);
        expect(cssCheck).to.contain(propertyCSSvalue);
      });

      cy.log(`Se verifica ${txtLog}`);
    });
  }
);

Then(`se toma una captura de pantalla de {string}`, (screenName) => {
  cy.screenshot(screenName);
});

Then(`se toma una captura de pantalla del elemento {string}`, (elemento) => {
  cy.get(elemento).first().screenshot();
});

When(
  `cuando el usuario presiona la flecha de {string} en el navegador`,
  (action) => {
    cy.go(action); //back => -1, foward => 1,
  }
);

Then(`se verifica que la url contiene {string}`, (url) => {
  cy.url().should("include", url);
});

Then(`se verifica que la url es {string}`, (url) => {
  cy.url().should("eq", url);
});
