/// <reference types="Cypress" />
describe("gallery test", () => {
    const locators=require("../fixtures/locators.json")
    it("login without email address", () => {
        cy.visit("/");
        cy.get(locators.navbar.loginButton).click();
        cy.get(locators.commonFormElements.passwordInput).type("katarina27")
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("include", "/login");
      });
      it("login without password", () => {
        cy.visit("/");
        cy.get(locators.navbar.loginButton).click();
        cy.get(locators.commonFormElements.emailInput).type("rina.ns@hotmail.com");
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("include", "/login");
      });
        it("login test", () => {
            cy.visit("/");
            cy.get(locators.navbar.loginButton).click();
            cy.get(locators.commonFormElements.emailInput).type("rina.ns@hotmail.com");
            cy.get(locators.commonFormElements.passwordInput).type("katarina27");
            cy.get(locators.commonFormElements.submitButton).click();
            // cy.wait(2000);
            cy.get(".nav-link").should("have.length",4);
            cy.url().should("not.contain", "/login");
            cy.get(".nav-link").eq(3).click();
        });
    });