class LoginPage {
  get email() {
    return cy.get("input[type='email']");
  }
  get password() {
    return cy.get("input[type='password']");
  }
  get submitBtn() {
    return cy.get("button[type='submit']");
  }
  get mainHeader() {
    return cy.get("h1");
  }

  loginInfo(email, password) {
    this.email.type(email);
    this.password.type(password);
    this.submitBtn.click();
  }
  ///ORGANIZATION

  get addNew() {
    return cy.contains("Add New");
  }
  get newOrganizaton() {
    return cy.contains("Add Organization");
  }
  get organizatonTitle() {
    return cy.get("input[name='name']");
  }
  get nextBtn() {
    return cy.get("button[name='next_btn']");
  }
  get newOrganizationTitle() {
    return cy.contains("Organization Name *");
  }
  get nameOfOrganization() {
    return cy.contains(this.nameOfOrganization);
  }
  get confirmBtn() {
    return cy.get(".vs-c-modal--features-button > .vs-c-btn");
  }
  ///BOARD

  get AddNewBtn() {
    return cy.contains("Add New");
  }
  get AddBoard() {
    return cy.contains("Add Board");
  }
  get nameInputField() {
    return cy.get("input[name='name']");
  }
  get nextBoardBtn() {
    return cy.get("button[name='next_btn']");
  }
  get ScrumBtn() {
    return cy.get("span[name='type_scrum']");
  }
  get finishBtn() {
    return cy.contains("Finish");
  }
}
export const loginPage = new LoginPage();
