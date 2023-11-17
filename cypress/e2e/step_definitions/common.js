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

  //cy.reload();
});

When(`se desea testear accesibilidad en la página`, () => {
  cy.injectAxe();
});

Then(`se genera un listado de los errores de accesibilidad`, () => {
  cy.checkA11y();
});

Then(
  `se genera un listado de los errores de accesibilidad del elemento {string}`,
  (elementSelect) => {
    cy.checkA11y(elementSelect);
  }
);

Then(
  `se genera un listado de los errores de accesibilidad de toda la página excepto del elemento {string}`,
  (elementSelect) => {
    cy.checkA11y({ exclude: [elementSelect] });
  }
);

Then(
  `se genera un listado de los errores {string} de accesibilidad`,
  (errorLvl) => {
    cy.checkA11y(null, { includedImpacts: [errorLvl] });
  }
);

Then(
  `se genera un listado de los errores de accesibilidad y se imprime reporte`,
  () => {
    cy.checkA11y(null, null, terminal);
  }
);

Then(`se ejecuta lighthouse`, () => {
  /*cy.lighthouse({
    performance: 85,
    accessibility: 100,
    "best-practices": 85,
    seo: 85,
    pwa: 100,
  });*/

  const thresholds = {
    performance: 5,
    accessibility: 5,
    "best-practices": 5,
    seo: 5,
    pwa: 5,
  };

  const lighthouseOptions = null;

  const lighthouseConfig = null;

  cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
});
