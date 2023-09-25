class ClaroHeader {
  getHeaderOptionMenu() {
    return cy.get('[data-test="mt-link"]');
  }

  getHeaderSuboptionMenu() {
    return cy.get('[data-test="box-container"]');
  }
}

module.exports = new ClaroHeader();
