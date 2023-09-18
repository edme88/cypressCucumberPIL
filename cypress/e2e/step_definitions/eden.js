import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../pages/edepage");
const edenEvent = require("../../pages/edenEvent");

When(`escribe {string} en el campo del buscador`, (palabraAbuscar) => {
  edenHome.getSearchInput().type(palabraAbuscar);
});

When(`hace click en la sugerencia {string}`, (suggestionTxt) => {
  edenHome.getSearchSuggestions().contains(suggestionTxt).click();
});

When(`presiona el botón del header {string}`, (btnHeader) => {
  edenHome.getNavBarBtn().contains(btnHeader).click();
});

When(`presiona el botón Ver de {string}`, (showName) => {
  cy.intercept("GET", "FUNC022211").as("getShow");
  if (isNaN(showName)) {
    edenHome
      .getEventBlock()
      .contains(showName)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  } else {
    edenHome
      .getEventBlock()
      .eq(showName - 1)
      .parent()
      .parent()
      .find("a")
      .last()
      .click();
  }
  cy.wait("@getShow").then((respuesta) => {
    cy.writeFile("cypress/fixtures/intercept/show.json", respuesta);
  });
});

Then(
  `el precio que se visualiza tiene el formato correcto validado con la respuesta del intercept`,
  () => {
    cy.fixture("intercept/show.json").then((resp) => {
      const precios = resp.response.body.Precios;

      edenHome.getEventPrice().each((precioShow, inx) => {
        const precioUb = precios[inx];
        const precioShows = `${precioUb.PrecioEntrada} + ${precioUb.ServiceCharge}`;

        cy.wrap(precioShow).should("contain.text", precioShows);
      });
    });
  }
);

Then(
  `el precio que se visualiza tiene el formato correcto validado con el servicio`,
  () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/funcion/FUNC022211",
    }).then((resp) => {
      const precios = resp.body.Precios;
      edenHome.getEventPrice().each((precioShow, inx) => {
        const precioUb = precios[inx];
        const precioShows = `${precioUb.PrecioEntrada} + ${precioUb.ServiceCharge}`;
        edenHome
          .getEventUbicacion()
          .eq(inx)
          .should("contain.text", precioUb.Nombre);
        cy.wrap(precioShow).should("contain.text", precioShows);
      });
    });
  }
);

Then(`el precio que se visualiza tiene el formato correcto`, () => {
  const precio = new RegExp(
    "\\$ [0-9]{1,3}.[0-9]{3},[0-9]{2} \\+ \\$ [0-9]{3},[0-9]{2}"
  );
  edenHome.getEventPrice().contains(precio);
});

Then(`se verifica que el título es {string}`, (eventTitle) => {
  edenEvent.getEventTitle().should("have.text", eventTitle);
});

Then(`la fecha es {string} de {string} a las {string} Hs`, (day, month, hs) => {
  edenEvent.getEventDay().should("contain.text", day);
  edenEvent.getEventMonth().should("contain.text", month);
  edenEvent.getEventHour().should("contain.text", hs);
});

Then(`se verifican los siguientes datos del evento`, (table) => {
  table = table.rowsHash();
  edenEvent.getEventTitle().should("contain.text", table["titulo"]);
  edenEvent.getEventDay().should("contain.text", table["dia"]);
  edenEvent.getEventMonth().should("contain.text", table["mes"]);
  edenEvent.getEventHour().should("contain.text", table["hora"]);
});
