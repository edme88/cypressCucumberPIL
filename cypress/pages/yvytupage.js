class Yvytu {
  //Header
  getMenuAllButton() {
    return cy.get("nav#menu-nav a");
  }
  //Banner de imágenes
  getCurrentImageBanner() {
    return cy.get(
      `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
    );
  }

  getImgButton() {
    return cy.get("ul").first().find("li button");
  }
  //Textos

  //Cabañas
  getCabTitle() {
    return cy.get("h3");
  }

  getItemContainer() {
    return cy.get('div[class="flex flex-col font-normal"]');
  }

  //Footer

  //Generic
  getGenericBtn() {
    return cy.get("button");
  }

  getGenericLink() {
    return cy.get("a");
  }
}

module.exports = new Yvytu();
