/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";

describe("Register test", () => {
 let userData ={
  firstName : "Katarina",
  lastName :"Skoric",
  email: "rina.ns@hotmail.com",
  password:"katarina27",
  shortPassword:"pass",
  invalidEmail: "rina.ns@hotmail.com",
 };

 before("visit app and click on register link", () => {
    cy.visit("/");
    registerPage.registerLink.click();
    cy.url().should("contain", "/register");
  });

  it("register with valid data", () => {
    registerPage.registerWithValidData(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.password
    );
    cy.url().should("not.contain","/register");
    });
  });
