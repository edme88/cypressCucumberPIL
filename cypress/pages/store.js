class StorePage {
  getHeaderLinks() {
    return cy.get("header a");
  }
}

module.exports = new StorePage();
