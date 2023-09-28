class DexterPage {
  getRightArrow() {
    return cy.get('[data-slide="next"]');
  }

  getBrandLink() {
    return cy.get('.brands-carousel [href^="marcas/"]');
  }
}

module.exports = new DexterPage();
