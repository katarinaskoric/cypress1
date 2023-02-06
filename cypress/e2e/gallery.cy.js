/// <reference types="Cypress" />

describe("gallery test", () => {
 it("login test", () => {
  cy.visit ("https://gallery-app.vivifyideas.com/");
  cy.get(".nav-link").eq(1).click();
  //cy.get("a[href]='/login']");
  //cy.contains("Login");
  cy.get("#email").type("rina.ns@hotmail.com");
  cy.get("#password").type("katarina27");
  cy.get("button").click();
  //cy.wait(2000);
  cy.get(".nav-link").should("have.length", 4);
  cy.url().should("not.contain","/login");
  cy.get(".nav-link").eq(3).click();
  });  


it.only("register test", () => {
cy.visit("/");
cy.get(".nav-link").eq(2).click();
cy.url().should("contain","/register");
cy.get("#first-name").type("Test");
cy.get("#last-name").type("Test");
cy.get("#email").type("test1@mail.com");
cy.get("#password").type("Test12345");
cy.get("#password-confirmation").type("Test12345");
cy.get(":checkbox").check();
cy.get("button").click();

});
});
