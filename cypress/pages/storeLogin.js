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

  login(user, pass) {
    this.getLoginInput().type(user);
    this.getPassInput().type(pass);
    this.getLoginBtn().click();
  }
}

module.exports = new StoreLoginPage();
