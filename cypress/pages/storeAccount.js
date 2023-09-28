class StoreAccountage {
  getMainTitle() {
    return cy.get("h1");
  }
}

module.exports = new StoreAccountage();
