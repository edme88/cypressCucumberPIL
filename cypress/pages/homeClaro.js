class ClaroHeader {
  getHeaderOptionMenu() {
    return cy.get('[data-test="mt-link"]');
  }
}

module.exports = new ClaroHeader();
