class Eden {
  getSearchInput() {
    return cy.get("#espectaculoList");
  }

  getSearchSuggestions() {
    return cy.get('ul.ui-autocomplete [id^="ui-id-"]');
  }

  getNavBarBtn() {
    return cy.get(".navbar-menu");
  }

  getEventBlock() {
    return cy.get(".fechas-funciones");
  }

  getVerBtn() {
    return cy.get(".contenido-todos-ver-funcion");
  }

  getEventPrice() {
    return cy.get('[class="col-12 mb-1"]');
  }

  getEventUbicacion() {
    return cy.get('tbody [class="col-12"]');
  }
}

module.exports = new Eden();
