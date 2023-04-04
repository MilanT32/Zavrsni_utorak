/// <reference types = "Cypress" />
import { faker } from "@faker-js/faker";
import { loginPage } from "../page_objects/loginPOM";
const userData = require("../fixtures/user.json");

it("Create new organization", () => {
  var nameOfOrganization = faker.name.firstName();
  cy.visit("/login");
  loginPage.loginInfo(userData.userEmail, userData.password);
  loginPage.addNew.click();
  loginPage.newOrganizaton.click();
  loginPage.newOrganizationTitle.should("be.visible");
  loginPage.organizatonTitle.type(nameOfOrganization);
  loginPage.nextBtn.click();
  loginPage.nextBtn.click();
  loginPage.confirmBtn.click();
});
it("Successfully add new board", () => {
  cy.visit("/login");
  loginPage.loginInfo(userData.userEmail, userData.password);
  loginPage.AddNewBtn.click();
  loginPage.AddBoard.click();
  loginPage.nameInputField.type(faker.name.firstName());
  loginPage.nextBoardBtn.click({ force: true });
  loginPage.ScrumBtn.click();
  loginPage.nextBoardBtn.click();
  loginPage.nextBoardBtn.click();
  loginPage.nextBoardBtn.click();
  loginPage.finishBtn.click();
});
