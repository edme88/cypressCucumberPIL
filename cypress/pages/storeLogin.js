class StoreLoginPage {
  getLoginInput() {
    return cy.get("#loginFrm_loginname");
  }

  getPassInput() {
    return cy.get("#loginFrm_password");
  }

  getLoginBtn() {
    return cy.get('[title="Login"]');
  }
}

module.exports = new StoreLoginPage();
