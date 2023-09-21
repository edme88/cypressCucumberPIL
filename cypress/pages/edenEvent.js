class EdenEvent {
  //lOCADORES DE TITULO DE EVENTOS
  getEventTitle() {
    return cy.get(".fechas-funciones span").first();
  }
  //Fechas
  getEventMonth() {
    return cy.get(".fechas-funciones span").last();
  }

  //
  getEventDay() {
    return cy.get("#calendarDay");
  }

  getEventHour() {
    return cy.get("#calendarTime");
  }
}

module.exports = new EdenEvent();
