///<reference types="Cypress"/>

import { loginPage } from "../page_objects/loginPage";

const credentials = {
    email:"rina.ns@hotmail.com",
    password:"katarina27",
};

describe("login tests", () => {
 before("visit app and click the login link",() =>{
   cy.visit("/");
   loginPage.loginLink.click();
    });
    
    it("login with valid credentials", () => {
        loginPage.login(credentials.email, credentials.password);
    });
});
   

