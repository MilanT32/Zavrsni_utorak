/// <reference types = "Cypress" />
import { faker } from "@faker-js/faker";
import { loginPage } from "../page_objects/loginPOM";
const userData = require("../fixtures/user.json");

describe("Login", () => {
  it("Successful login", () => {
    cy.visit("/login");
    loginPage.mainHeader.should(
      "have.text",
      "Log in with your existing account"
    );
    loginPage.loginInfo(userData.userEmail, userData.password);
    loginPage.email.should("have.value", userData.userEmail);
    loginPage.password.should("have.value", userData.password);
    cy.url().should(
      "eq",
      "https://cypress.vivifyscrum-stage.com/my-organizations"
    );
    loginPage.mainHeader.should("not.exist");
  });
  it("Unsuccessful login - try to login with valid email", () => {
    cy.visit("/login");
    loginPage.loginInfo("l", userData.password);
    cy.url().should("contain", "/login");
    loginPage.email.should("be.visible");
    loginPage.password.should("be.visible");
    loginPage.submitBtn.should("be.visible");
  });
  it("Unsuccessful login - try to login with short password", () => {
    cy.visit("/login");
    loginPage.loginInfo(userData.userEmail, "bro");
    cy.url().should("contain", "/login");
    loginPage.email.should("be.visible");
    loginPage.password.should("be.visible");
    loginPage.submitBtn.should("be.visible");
  });
});
