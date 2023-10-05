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
}

module.exports = new LibertadPage();
