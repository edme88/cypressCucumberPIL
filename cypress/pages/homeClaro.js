class ClaroHeader {
  getHeaderOptionMenu() {
    return cy.get('[data-test="mt-link"]');
  }

  getHeaderSuboptionMenu() {
    return cy.get('[data-test="box-container"]');
  }

  //TODO: Hablar con el desa para agregar un data-test en el elemento de filtro
  getCatalogFilter() {
    return cy.get(
      '[class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiSelect-root css-oixtcz"]'
    );
  }

  getCatalogFilterSubOption() {
    return cy.get('[role="listbox"] li');
  }

  getLoadingIcon() {
    return cy.get('[data-test="loading"]');
  }

  getOfferPrices() {
    return cy.get('[data-test="price"]');
  }
}

module.exports = new ClaroHeader();
