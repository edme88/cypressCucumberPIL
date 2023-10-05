class LibertadPage {
  getGenericButton() {
    return cy.get("button");
  }

  getAddressInput() {
    return cy.get('[placeholder="Dirección"]');
  }

  getAddressModal() {
    return cy.get("form.hiperlibertad-store-selector-1-x-wrapperForm");
  }

  getAddressSuggestions() {
    return cy.get(
      '[class="hiperlibertad-store-selector-1-x-searchResultWrapper"]'
    );
  }

  getNumberInput() {
    return cy.get('[placeholder="Ingrese numero"]');
  }
}

module.exports = new LibertadPage();
